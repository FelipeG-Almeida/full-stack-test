import express from 'express';
import { Controller } from './controller/controller';

export const router = express.Router();

const controller = new Controller();

router.post('/api/files', controller.uploadCSV);
