import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './src/router/router';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.listen(Number(process.env.PORT || 3003), () => {
	console.log('Server running on port', process.env.PORT);
});

app.use('/csv', router);
