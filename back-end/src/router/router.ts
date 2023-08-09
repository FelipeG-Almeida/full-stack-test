import express from 'express';
import { Controller } from '../controller/controller';
import Database from '../database/database';

export const router = express.Router();

const controller = new Controller(new Database());

router.post('/api/files', controller.uploadCSV);
router.get('/api/users', controller.getUsers);
