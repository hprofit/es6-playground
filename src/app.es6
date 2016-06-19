class Hello {
    run() {
        document.querySelector("#helloDiv").innerHTML = "ES6 Hello World";
    }
}

var hello = new Hello();
hello.run();