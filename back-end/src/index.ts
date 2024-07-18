import appService from './appService'
import TestController from './controllers/Test.controller'
import UserController from './controllers/User.controller'
import { dbConn } from './database/dbConnect';

console.log("11111 ---");

const app = new appService([
    new TestController() as never,
    new UserController() as never,
])
console.log("2222 ---");


app.startListening();