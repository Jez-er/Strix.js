import express, { Express } from 'express'
import fs from 'fs'
import path from 'path'
import request from 'supertest'
import Client from '../../core/client'

describe('Client', () => {
	let app: Express
	let client: Client
	const mockHtmlPath = path.join(process.cwd(), 'client', 'index.html')

	beforeAll(() => {
		const htmlContent = '<html><body><h1>Fake Index HTML</h1></body></html>'
		fs.mkdirSync(path.join(process.cwd(), 'client'), { recursive: true })
		fs.writeFileSync(mockHtmlPath, htmlContent)
	})

	afterAll(() => {
		if (fs.existsSync(mockHtmlPath)) {
			fs.unlinkSync(mockHtmlPath)
		}
		fs.rmdirSync(path.join(process.cwd(), 'client'))
	})

	beforeEach(() => {
		app = express()
		client = new Client(app)
		client.init()
	})

	test('should serve fake index.html on GET /', async () => {
		const response = await request(app).get('/')

		expect(response.status).toBe(200)
		expect(response.headers['content-type']).toMatch(/html/)
		expect(response.text).toContain('<h1>Fake Index HTML</h1>')
	})
})
