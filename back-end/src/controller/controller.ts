import { Request, Response } from 'express';
import fileUpload from 'express-fileupload';
import database from '../database/database';
import { User } from '../models/User';
import BadRequestError from '../BadRequestError';
import Database from '../database/database';

export class Controller {
	constructor(private database: Database) {}
	public uploadCSV = async (req: Request, res: Response) => {
		try {
			if (!req.files || !req.files.file) {
				throw new BadRequestError('No CSV file uploaded.');
			}

			const csvFile = req.files.file as fileUpload.UploadedFile;
			const csvData = csvFile.data.toString('utf8');

			const rows = csvData.split('\n');
			const headers = rows[0].split(',');

			for (let i = 1; i < rows.length; i++) {
				const values = rows[i].split(',');
				const dataObject = headers.reduce(
					(acc: Record<string, string>, header, index) => {
						acc[header.trim()] = values[index].trim();
						return acc;
					},
					{}
				);

				const newUser: User = {
					name: dataObject.name,
					city: dataObject.city,
					country: dataObject.country,
					favorite_sport: dataObject.favorite_sport,
				};

				await this.database.insertDB(newUser);
			}

			return res
				.status(200)
				.json({ message: 'CSV data uploaded and saved to database.' });
		} catch (error) {
			console.error(error);
			if (error instanceof BadRequestError) {
				return res.status(error.statusCode).send(error.message);
			}
			return res.status(500).json({
				error: 'An error occurred while processing the CSV file.',
			});
		}
	};

	public getUsers = async (req: Request, res: Response) => {
		try {
			const searchTerm: string =
				req.query.q?.toString().toLowerCase() || '';

			const users: User[] = await this.database.getUsers(searchTerm);

			return res.status(200).json(users);
		} catch (error) {
			console.error(error);
			return res.status(500).json({
				error: 'An error occurred while searching users.',
			});
		}
	};
}
