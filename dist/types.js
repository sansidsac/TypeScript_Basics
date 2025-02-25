"use strict";
let myName = "Sanju";
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet(myName);
function getANumber() {
    return 26;
}
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
function printName(obj) {
    console.log(obj.first);
    if (obj.last !== undefined) {
        console.log(obj.last);
    }
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
function printId(id) {
    console.log("Your ID is: " + id);
}
printId(101);
printId("202");
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log("Hello, " + x.join(" and "));
    }
    else {
        console.log("Welcome lone traveler " + x);
    }
}
function printID(id) {
    console.log("Your ID is: " + id);
}
function testt(str) {
    return str;
}
function printcoordi(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printcoordi({ x: 100, y: 100 });
const bear = { name: "Panda", honey: true };
bear.name;
bear.honey;
let str = "Hello World";
str = "Olá Mundo";
str;
const constantString = "Hello World";
constantString;
function printText(s, alignment) {
}
printText("Hello, world", "left");
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
}
configure({ width: 100 });
configure("auto");
function doSomething(x) {
    if (x === null) {
    }
    else {
        console.log("Hello, " + x.toUpperCase());
    }
}
function liveDangerously(x) {
    console.log(x.toFixed());
}
//# sourceMappingURL=types.js.map