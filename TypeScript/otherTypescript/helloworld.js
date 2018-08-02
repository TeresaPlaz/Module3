/* helloworld.ts */
class Greeter {
    constructor(message) {
        this.message = message;
    }
    sayHi() {
        return "<h1>" + this.message + "</h1>";
    }
}
let greeteer = new Greeter("Hello, world!");
document.body.innerHTML = greeteer.sayHi();
//# sourceMappingURL=helloworld.js.map