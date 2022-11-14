import { AuthController } from "./Controllers/AuthController.js";
import { BackgroundController } from "./Controllers/BackgroundController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  authController = new AuthController();
  // valuesController = new ValuesController();
  backgroundController = new BackgroundController();
  quotesController = new QuotesController();
}

window["app"] = new App();
