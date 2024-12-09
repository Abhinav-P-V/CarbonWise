import express, { Request, Response } from 'express';
import { ConnectDB } from './db';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 5000;

ConnectDB();

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to CarbonWise API!');
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});