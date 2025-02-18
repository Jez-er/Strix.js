import express from 'express';
import path from 'path';

class Client {
    app;
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
    config;
    app = express();
    client;
    constructor(userConfig) {
        if (!userConfig) {
            throw new Error('Configuration is not provided!');
        }
        this.config = userConfig;
        this.client = new Client(this.app);
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
