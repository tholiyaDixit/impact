import { ConsoleLogger } from "./consoleLogger"; 
// const ConsoleLogger = require("./consoleLogger");

/**
 * @Controller
 * If subclass initial constructor, you must be using super();
 *
 * Logger loader and defined property, static method ...
 * */

export class Controller {
  constructor() {
    ConsoleLogger.warn(
      `Instance Controller ${this.constructor.name} has loaded!`
    );
  }
}

// module.exports = Controller;
export default Controller;
