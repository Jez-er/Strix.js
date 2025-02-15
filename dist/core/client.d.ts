import { Express } from './../../node_modules/@types/express-serve-static-core/index.d';
declare class Client {
    private readonly app;
    constructor(app: Express);
    init(): void;
}
export default Client;
