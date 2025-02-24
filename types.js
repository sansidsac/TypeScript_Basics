var myName = "Sanju";
function greet(name) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
//greet(37); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
greet(myName);
function getANumber() {
    return 26;
}
// async function getFavoriteNumber(): Promise<number> { //Function getFavoriteNumber returns a promise that resolves to a number
//     return 26;
// }
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
//printId({ myID: 22342 });
function welcomePeople(x) {
    if (Array.isArray(x)) {
        // Here: 'x' is 'string[]'
        console.log("Hello, " + x.join(" and "));
    }
    else {
        // Here: 'x' is 'string'
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
var bear = { name: "Panda", honey: true };
bear.name;
bear.honey;
//type new field addition
// type Window = {
//   title: string;
// }
// type Window = {
//   ts: TypeScriptAPI;
// }
// const x = "hello" as number; //Error: Type 'string' is not assignable to type 'number'.
//Type assertions
var str = "Hello World";
str = "Olá Mundo";
str; //let str: string
var constantString = "Hello World";
constantString; //const constantString: "Hello World"
function printText(s, alignment) {
    // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre"); // Error: Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.
function compare(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function configure(x) {
    // ...
}
configure({ width: 100 });
configure("auto");
// configure("automatic"); // Error: Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.

