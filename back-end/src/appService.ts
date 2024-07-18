// import express, { Application, Request, Response } from 'express';
// import dotenv from 'dotenv';
// dotenv.config()
// console.log("PORT ---", process.env.PORT);
// console.log("BASE_URL ---", process.env.BASE_URL);
// const app: Application = express();

// app.get('/', (req: Request, res: Response) => {
//     res.send('Hello word test start command')
// });

// // (function () {
// //     new Index(app)
// // })();

// app.listen(process.env.PORT, () => {
//     console.log("connect successfully on port " + process.env.PORT);
// })
import express, { Application, Request, Response } from 'express'
import dotenv from 'dotenv';
import { ConsoleLogger } from './core/consoleLogger';
import { join } from 'path';
import bodyParser from 'body-parser'
// import cors from 'cors'
const cors = require ("cors");

export class appService {
    app: Application = express();
    defaultPort: number = 3010;
    server: any;
    constructor(controllers = []) {
        dotenv.config();
        // this.connectionDatabase();
        this.initMiddleWares();
        // this.enableStaticFile();
        // this.initLogger();
        console.log("controllers ---",controllers);
        
        this.initializeControllers(controllers);
        // this.initErrorHandling();
        if (process.env.IS_SSR) {
            this.loadSSRView();
        }
        console.log("1...... ---");
        
    }

    initErrorHandling() {
        // this.app.use(ErrorsMiddleware);
    }

    initLogger() {
        // this.app.use (LoggerMiddleware);
    }
    buildCorsOpt () {
		const configCors = process.env.CORS_ALLOW_ORIGINS;
		if (!configCors) {
			throw new Error ("ENV CORS not provider!");
		}
		return {
			origin: configCors.toString ().split (","),
			methods: "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
			preflightContinue: false,
			optionsSuccessStatus: 204,
			credentials: true,
		};
	}

    enableStaticFile() {
        this.app.use(express.static(join(__dirname, "public")));
    }

    initMiddleWares() {
        this.app.use(cors())
        // this.app.use (cors (this.buildCorsOpt ()));
        this.app.use (bodyParser.json ());
        // console.log("callInitMiddleWares ---");
        
    }

    loadSSRView() {
        this.app.use(express.static(join(__dirname, "build")));
        this.app.get("*", (req: Request, res: Response) => {
            res.sendFile(join(__dirname, "./build/index.html"));
        });
    }

    initializeControllers(controllers = []) {
        console.log("controllers ---",controllers);
        
        controllers.forEach((c: any) => {
            console.log("root ---", c._router);
            // console.log("root ---", c);

            this.app.use("/", c._router);
        });
    }

    startListening() {
        // let consoleLogger = new ConsoleLogger()
        const PORT = process.env.PORT || this.defaultPort;
        this.server = this.app.listen(PORT, () => {
            ConsoleLogger.info(`Server started on ${PORT}!`);
        });
        // new SocketServer(this._server);
    }


}

export default appService;