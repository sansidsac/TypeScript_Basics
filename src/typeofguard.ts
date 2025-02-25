//Narrowing
//It looks at these special checks (called type guards) and assignments, and the process of 
// refining types to more specific types than declared is called narrowing

//Truthiness ----------------------------------------------------------------

// function printAll(strs: string | string[] | null) {
//     if (strs && typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     }
// }

//even better

function printAll(strs: string | string[] | null) {
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
}

function multiplyAll(
    values: number[] | undefined,
    factor: number
  ): number[] | undefined {
    if (!values) { //if values is null or undefined
      return values;
    } else {
      return values.map((x) => x * factor);
    }
}

//Equality narrowing --------------------------------------------------------

function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      x.toUpperCase();
      y.toLowerCase();
    } 
    else {
      console.log(x);
      console.log(y);
    }
}

//for the printAll example

function printAll2(strs: string | string[] | null) {
    if (strs !== null) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
}

interface Container {
    value: number | null | undefined;
}

function multiplyValue(container: Container, factor: number) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) { 
      console.log(container.value);
      // Now we can safely multiply 'container.value'.
      container.value *= factor;
    }
}

//instanceof narrowing ------------------------------------------------------

function logValue(x: Date | string) {
    if (x instanceof Date) { //x is of type Date
      console.log(x.toUTCString());
    } else {
      console.log(x.toUpperCase());
    }
}

//Assignments ----------------------------------------------------------------

let x = Math.random() < 0.5 ? 10 : "hello world!"; //x is of type string | number

//Type predicates -----------------------------------------------------------

//A type predicate is a boolean-returning function that checks if an object conforms to a specific type.

// function isFish(pet: Fish | Bird): pet is Fish {
//     return (pet as Fish).swim !== undefined;
// }

// let pet = getSmallPet();
 
// if (isFish(pet)) {
//   pet.swim();
// } else {
//   pet.fly();
// }

//Discriminated unions ------------------------------------------------------
//A pattern in TypeScript is to have a series of interfaces which have a common,
//singleton property — a string literal type — which unions all the interfaces together.
interface Circle {
    kind: "circle";
    radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

