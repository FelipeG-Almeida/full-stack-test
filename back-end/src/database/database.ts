import knex from 'knex';
import { User } from '../models/User';

export default class Database {
	public static USERS = 'users';

	public static connection = knex({
		client: 'sqlite3',
		connection: {
			filename: './src/database/database.db',
		},
		useNullAsDefault: true,
		pool: {
			min: 0,
			max: 1,
		},
	});

	public async insertDB(newUser: User): Promise<void> {
		await Database.connection(Database.USERS).insert(newUser);
	}

	public async getUsers(searchTerm: string): Promise<User[]> {
		const results = await Database
			.connection(Database.USERS)
			.whereRaw('LOWER(name) LIKE ?', [`%${searchTerm}%`])
			.orWhereRaw('LOWER(city) LIKE ?', [`%${searchTerm}%`])
			.orWhereRaw('LOWER(country) LIKE ?', [`%${searchTerm}%`])
			.orWhereRaw('LOWER(favorite_sport) LIKE ?', [`%${searchTerm}%`]);

		return results;
	}
}
