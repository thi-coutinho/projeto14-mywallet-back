import db from "../config/database.js"
import dayjs from "dayjs"
import { ObjectId } from "mongodb"

export async function saveEntry(req, res) {
    const {value,description, date, category} = req.body
    const {userId} = res.locals.session
    const entryType = res.locals.entryType
    const valueNumber = Number(value)
    const insertDate = date || dayjs(Date.now()).format("DD/MM/YYYY")
    try {
        const entry = await db.collection("entries").insertOne({userId,value:valueNumber,description,category,date:insertDate,entryType})
        res.status(201).send("registered entry")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export async function getEntries(req,res){
    const {userId} = res.locals.session
    try {
        const entries = await db.collection("entries").find({userId}).toArray()
        res.send(entries)
    } catch (error) {
        res.status(500).send(error.message)        
    }
}

export async function delEntry(req,res){
    const {userId} = res.locals.session
    const {entryId} = req.params
    try {
        const entries = await db.collection("entries").deleteOne({_id: ObjectId(entryId),userId})
        if (entries.deletedCount>0) res.send("Deleted")
        else res.sendStatus(404)
    } catch (error) {
        res.status(500).send(error.message)        
    }
}

export async function updateEntry(req,res) {
    const {userId} = res.locals.session
    const {entryId} = req.params
    const {value,description,category,entryType,date} = req.body
    try {
        await db.collection("entries").updateOne({_id: ObjectId(entryId),userId},{$set:{value:Number(value),description,category,entryType,date}})
        res.send("Updated")
    } catch (error) {
        res.status(500).send(error.message)        
        
    }
}