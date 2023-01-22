import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import authRouter from '../routes/AuthRoute.js'
dotenv.config()

const PORT = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())

app.use(authRouter)

app.listen(PORT,()=>console.log(`Server running at port ${PORT}}`))