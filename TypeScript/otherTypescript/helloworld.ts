/* helloworld.ts */
class Greeter {
  constructor(public message: string) { }
  sayHi() {
      return "<h1>" + this.message + "</h1>";
  }
}

let greeteer = new Greeter("Hello, world!");

document.body.innerHTML = greeteer.sayHi();