export default class BadRequestError extends Error {
	constructor(
		message: string = 'Requisição Inválida',
		public statusCode: number = 400
	) {
		super(message);
	}
}
