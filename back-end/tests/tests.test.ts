import request from 'supertest';
import { app } from '../src/index';

describe('Testing backend endpoints', () => {

	it('should upload a CSV file and save data to the database', async () => {
		const csvData =
			'name,city,country,favorite_sport\nJohn,Doe,USA,Basketball\nJane,Smith,Canada,Soccer';

		const response = await request(app)
			.post('/api/files')
			.attach('file', Buffer.from(csvData), 'test.csv');

		expect(response.status).toBe(200);
		expect(response.body.message).toBe(
			'CSV data uploaded and saved to database.'
		);
	});

	it('should return a list of users from the database', async () => {
        const response = await request(app)
            .get('/api/users')
            .query({ q: '' });

        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(4);
    });
});
