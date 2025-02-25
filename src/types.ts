let myName: string = "Sanju"; 

function greet(name: string) { //Function greet expects a string as an argument
    console.log("Hello, " + name.toUpperCase() + "!!");
}

//greet(37); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
greet(myName);

function getANumber(): number { //Function getANumber returns a number
    return 26;
}

// async function getFavoriteNumber(): Promise<number> { //Function getFavoriteNumber returns a promise that resolves to a number
//     return 26;
// }

function printCoord(pt: { x: number; y: number }) { //Function printCoord expects an object with x and y properties
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

function printName(obj: { first: string; last?: string }) { //Function printName expects an object with a first property and an optional last property
    console.log(obj.first);
    if (obj.last !== undefined) {
        console.log(obj.last);
    }
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

function printId(id: number | string) { //Function printId expects a number or a string (Union)
    console.log("Your ID is: " + id);
}
printId(101);
printId("202");
//printId({ myID: 22342 });

function welcomePeople(x: string[] | string) { //Same as above, but with an array
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
}

// type Point = { //Type Point is an object with x and y properties
//     x: number;
//     y: number;
// };
// function printcoord(pt: Point) { //Function printcoord expects an object with x and y properties
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }
   
// printcoord({ x: 100, y: 100 });

type ID = number | string; //Type ID is a number or a string (Union)
function printID(id: ID) { //Function printID expects a number or a string (Union)
    console.log("Your ID is: " + id);
}

type returnType = string;
 
function testt(str: string): returnType {
  return str;
}

//Interfaces

interface Point {//Interface Point is an object with x and y properties
    x: number;
    y: number;
}
   
function printcoordi(pt: Point) { //Function printcoordi expects an object with x and y properties
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printcoordi({ x: 100, y: 100 });

//Interface extending
interface Animal {
    name: string;
}
  
interface Bear extends Animal {
  honey: boolean;
}

const bear: Bear = { name: "Panda", honey: true };
bear.name;
bear.honey;

//Type extending
// type Animal = {
//     name: string;
// }

// type Bear = Animal & { 
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;

//interface new field addition
interface Window {
  title: string;
}

interface Window {
  ts: number;
}

//type new field addition
// type Window = {
//   title: string;
// }

// type Window = {
//   ts: TypeScriptAPI;
// }

// const x = "hello" as number; //Error: Type 'string' is not assignable to type 'number'.


//Type assertions
let str = "Hello World";
str = "Olá Mundo";
str; //let str: string
      
const constantString = "Hello World";
constantString; //const constantString: "Hello World"

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
printText("Hello, world", "left");
// printText("G'day, mate", "centre"); // Error: Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

function compare(a: string, b: string): -1 | 0 | 1 {//Function compare expects two strings and returns -1, 0, or 1
    return a === b ? 0 : a > b ? 1 : -1;
}

interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
// configure("automatic"); // Error: Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.


//Type guards
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed()); //Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined
}
