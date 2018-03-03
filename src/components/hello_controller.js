import { Controller } from "stimulus"

export default class Hello extends Controller {
  connect() {
    console.log("Connected:");
  }
}