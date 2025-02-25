
function greeter(fn: (a: string) => void) { //Type of fn is a function that takes a string and returns void
  fn("Hello, World");
}

//OR
// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
//   // ...
// }
 
function printToConsole(s: string) { //Type of s is string
  console.log(s);
}
 
greeter(printToConsole);

