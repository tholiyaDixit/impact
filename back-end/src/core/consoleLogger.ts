// import chalk from 'chalk'
const chalk = require("chalk");

const log = console.log;

export class ConsoleLogger {
    constructor() { }
    static info(message: any) {
        return log(chalk.blue(chalk.bold(message)));
    }

    static warn(message: any) {
        log(chalk.yellowBright(chalk.bold(message)));
    }

    static error(message: any) {
        log(chalk.redBright(chalk.bold(message)));
    }

    static success(message: any) {
        log(chalk.green(chalk.bold(message)));
    }

    static verbose(message: any) {
        log(chalk.hex("#8b4ccf").bold(message));
    }
}

export default ConsoleLogger;