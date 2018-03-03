import { Application } from "stimulus"
import HelloController from "./components/hello_controller"

console.log("hello world");

const application = Application.start()
application.register("hello", HelloController)