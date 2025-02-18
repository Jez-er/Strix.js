import { RequestHandler } from 'express';
import { IServerConfig } from '../types';
declare class Strix {
    private config;
    private readonly app;
    private client;
    constructor(userConfig?: IServerConfig);
    private onSetup;
    init(): void;
    use(dependency: RequestHandler): void;
}
export default Strix;
