import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { clientRouter } from './modules/cliente/routers/clientRouter'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(Number(3003), () => {
  console.log(`Servidor rodando na porta 3003`);
});

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('hello world');
  });

app.use('/cliente', clientRouter);

    