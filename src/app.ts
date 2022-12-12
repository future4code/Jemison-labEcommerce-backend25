import dotenv from 'dotenv';
import express, {Express} from 'express'
import cors from "cors"


dotenv.config()
const app: Express = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
    console.log(`Server Ready ${process.env.PORT || 3003} `)
})

export default app



