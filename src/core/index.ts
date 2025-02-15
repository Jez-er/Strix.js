import ServerConfig from 'configs/server.config'
import express, { RequestHandler } from 'express'
import { IServerConfig } from 'types'
import Client from './client'

class Strix {
	private config: IServerConfig
	private readonly app = express()

	private client = new Client(this.app)

	constructor(userConfig?: IServerConfig) {
		this.config = userConfig || ServerConfig
		if (!this.config) {
			throw new Error('Configuration is not provided!')
		}
	}

	private onSetup() {
		console.info(
			`Server started! 
			\n Client: http://localhost:${this.config.port}${this.config.clientUrl} 
			\n Server: http://localhost:${this.config.port}${this.config.serverUrl}`
		)
	}

	init() {
		this.app.listen(this.config.port, this.onSetup.bind(this))
		this.client.init()
	}

	use(dependency: RequestHandler) {
		this.app.use(dependency)
	}
}

export default Strix
