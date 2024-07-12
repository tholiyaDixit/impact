import appService from './appService'
import TestController from './controllers/Test.controller'

console.log("11111 ---");

const app = new appService([
    new TestController as never,
])
console.log("2222 ---");


app.startListening();