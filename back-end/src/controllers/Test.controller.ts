// import Controller from "../core";
import express, { NextFunction, Request, Response } from 'express'
import ServerException from "../exceptions/ServerException";
import Controller from '../core/controller';
import TestServer from '../service/test.service'
// import AllService from '../service/allService'
// import { dbConn } from '../database/dbConnect';
// import isLoggedIn from '@middleware/user';


class TestController extends Controller {
    _path = "/test";
    _router = express.Router();
    testService = TestServer;
    constructor() {
        super();
        this.initializeRoutes();
        console.log("aaaa ---");
    }


    // async getAll(req: Express.Request, res: any, next: NextFunction) {
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            console.log("call getAll---");
            let results = "testing response"
            let result = await TestServer.PasswordGeneratorService()
            res.send({
                status: 200,
                message: "success",
                data: {
                    results,
                    result
                },
            });
        } catch (error: any) {
            next(new ServerException(error.message));
        }
    }

    async testing(req: Express.Request, res: any, next: NextFunction) {
        console.log("testing successfully ---");
        next()
    }


    initializeRoutes() {
        console.log("bbbbb ---");

        this._router
            .get(`${this._path}/getAll` as any, this.testing, this.getAll)
    }
}

export default TestController;