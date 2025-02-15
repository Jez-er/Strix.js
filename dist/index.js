import express from 'express';
import path from 'path';

const ServerConfig = {
    port: 3000,
    clientUrl: '/',
    serverUrl: '/api',
};

class Client {
    // private __filename = fileURLToPath(import.meta.url)
    // private __dirname = path.dirname(this.__filename)
    constructor(app) {
        this.app = app;
    }
    init() {
        this.app.get('/', (req, res) => {
            res.sendFile(path.join(process.cwd(), 'client', 'index.html'));
        });
    }
}

class Strix {
    constructor(userConfig) {
        this.app = express();
        this.client = new Client(this.app);
        this.config = userConfig || ServerConfig;
        if (!this.config) {
            throw new Error('Configuration is not provided!');
        }
    }
    onSetup() {
        console.info(`Server started! 
			\n Client: http://localhost:${this.config.port}${this.config.clientUrl} 
			\n Server: http://localhost:${this.config.port}${this.config.serverUrl}`);
    }
    init() {
        this.app.listen(this.config.port, this.onSetup.bind(this));
        this.client.init();
    }
    use(dependency) {
        this.app.use(dependency);
    }
}

export { Strix };
//# sourceMappingURL=index.js.map
