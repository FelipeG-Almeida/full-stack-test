import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './router/router';
import fileUpload from 'express-fileupload';

dotenv.config();
export const app = express();

app.use(cors());
app.use(fileUpload());
app.use(express.json());

app.listen(Number(process.env.PORT || 3000), () => {
	console.log('Server running on port', process.env.PORT);
});

app.use('/', router);
