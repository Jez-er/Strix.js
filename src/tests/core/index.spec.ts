import { RequestHandler } from 'express'
import { Express } from 'express-serve-static-core'
import Strix from '../../core'

import { IServerConfig } from '../../types'

jest.mock('../../core/client.ts', () => {
	return jest.fn().mockImplementation(() => {
		return { init: jest.fn() }
	})
})

describe('Strix Server', () => {
	let app: Express
	let strix: Strix

	const mockConfig: IServerConfig = {
		port: 3000,
		clientUrl: '/client',
		serverUrl: '/server',
	}

	beforeEach(() => {
		strix = new Strix(mockConfig)
		app = (strix as any).app
	})

	test('should initialize server and client', async () => {
		const listenSpy = jest
			.spyOn(app, 'listen')
			.mockImplementation((port, callback) => {
				if (typeof callback === 'function') callback()
				return {} as any
			})

		strix.init()
		expect(listenSpy).toHaveBeenCalledWith(
			mockConfig.port,
			expect.any(Function)
		)
	})

	test('should use middleware', async () => {
		const mockMiddleware: RequestHandler = (req, res, next) => next()
		const useSpy = jest.spyOn(app, 'use')

		strix.use(mockMiddleware)
		expect(useSpy).toHaveBeenCalledWith(mockMiddleware)
	})

	test('should throw an error if no configuration is provided', () => {
		expect(() => new Strix(undefined as any)).toThrow(
			'Configuration is not provided!'
		)
	})
})
