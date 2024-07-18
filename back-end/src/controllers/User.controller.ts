// import Controller from "../core";
import express, { NextFunction, Request, Response } from 'express'
import ServerException from "../exceptions/ServerException";
import Controller from '../core/controller';
import UserServer from '../service/User.service'
import { dbConn } from '../database/dbConnect';
// import isLoggedIn from '@middleware/user';


class TestController extends Controller {
    _path = "/user";
    _router = express.Router();
    userService = UserServer;
    constructor() {
        super();
        this.initializeRoutes();
        console.log("callUserUserController ---");

    }

    async testing(req: Express.Request, res: any, next: NextFunction) {
        console.log("testing successfully ---");
        next()
    }

    async userLogin(req: Express.Request, res: Response, next: NextFunction) {
        try {
            let querys = `SELECT * FROM user WHERE email = 'testing123@gmail.com'`
            dbConn.query(querys, async function (error: any, results: any, fields: any) {
                console.log("error ---", error);

                if (error) throw error;
                console.log("data --", results);
                let result = await UserServer.getLoginDataWithEmail(results)
                res.send({ data: results })
            })
            // let result = await UserServer.getLoginDataWithEmail(req)
            // console.log("result ---", result);
        } catch (error: any) {
            console.log("error ---", error);

            next(new ServerException(error.message));
        }
    }


    async userSignUp(req: Express.Request, res: Response, next: NextFunction) {


        try {
            // dbConn.query(querys, async function (error: any, results: any, fields: any) {
            //     console.log("error ---", error);

            //     if (error) throw error;
            //     console.log("data --", results);
            //     let result = await UserServer.getLoginDataWithEmail(results)
            //     // if (!result) {
            //     //     next(new ServerException("testing"));
            //     //     // throw new Error("err/")
            //     //     res.send({ data: "notFpund", code: "notFound" })
            //     // }
            //     res.send({ data: results })
            // })
        } catch (error) {

        }
    }

    async userSignUpMiddleWares(req: Express.Request, res: any, next: NextFunction) {
        // console.log("testing ---", req);
        next()
        // try {

        // } catch (error) {

        // }
    }

    initializeRoutes() {
        console.log("bbbbb ---");

        this._router
            .post(`${this._path}/login` as any, this.testing, this.userLogin)
        this._router
            .get(`${this._path}/signUp` as any, this.userSignUpMiddleWares, this.userSignUp)
    }
}

export default TestController;