import db from "../config/database.js"
import bcrypt from 'bcrypt'
import { v4 as uuidV4 } from "uuid"

export async function signUp(req, res) {
    const { name, email, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    try {
        const emailUsed = await db.collection("users").findOne({ email })
        if (emailUsed) return res.status(409).send("Email already exists")

        const user = await db.collection("users").insertOne({ name, email, password: hashedPassword })
        res.status(201).send("Successfully registered user!")

    } catch (error) {
        res.status(500).send(error.message)
    }

}

export async function signIn(req, res) {
    const { email, password } = req.body
    try {
        const userCheck = await db.collection("users").findOne({ email })
        if (!userCheck) return res.status(400).send("Incorrect email and/or password")

        const passwordCheck = bcrypt.compareSync(password, userCheck.password)
        if (!passwordCheck) return res.status(400).send("Incorrect email and/or password")
        
        const token = uuidV4()
        console.log(userCheck._id)
        await db.collection("sessions").insertOne({ userId: userCheck._id, token })
        res.send(token)

    } catch (error) {
        res.status(500).send(error.message)
    }
}