import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from '../routes/AuthRoute.js'
import entryRouter from '../routes/EntryRoute.js'
dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

app.use([authRouter,entryRouter])

app.listen(PORT,()=>console.log(`Server running at port ${PORT}}`))