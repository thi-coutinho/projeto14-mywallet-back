import db from "../config/database.js"
import dayjs from "dayjs"

export async function saveEntry(req, res) {
    const {value,description} = req.body
    const {userId} = res.locals.session
    const entryType = res.locals.entryType
    const valueNumber = Number(value)
    const date = dayjs(Date.now()).format("DD/MM/YYYY")
    try {
        const entry = await db.collection("entries").insertOne({userId,value:valueNumber,description,date,entryType})
        console.log(userId)
        res.status(201).send("registered entry")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function getEntries(req,res){
    const {userId} = res.locals.session
    try {
        const entries = await db.collection("entries").find({userId}).toArray()
        console.log(userId)
        res.send(entries)
    } catch (error) {
        res.status(500).send(error.message)        
    }
}