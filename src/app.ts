import express, { Request, Response } from "express";
import cors from 'cors'
import { authRouter } from "./routes";

const app = express();

app.use(express.json())
app.use(cors())

app.get('/health', (req: Request, res: Response) => res.status(200).send('Server on'))
    .use('/auth', authRouter)

export default app
