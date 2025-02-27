import path from 'path'
import { Express } from './../../node_modules/@types/express-serve-static-core/index.d'

class Client {
	private readonly app: Express

	constructor(app: Express) {
		this.app = app
	}

	init() {
		this.app.get('/', (req, res) => {
			res.sendFile(path.join(process.cwd(), 'client', 'index.html'))
		})
	}
}

export default Client
