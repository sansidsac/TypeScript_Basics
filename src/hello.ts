function greet1(person: string, date: Date)  {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet1("Brendan", new Date());

//   Compile the code with the TypeScript compiler.
//tsc hello.ts

//   Run the TypeScript compiler with the --noEmitOnError flag to see the error message.
//tsc --noEmitOnError hello.ts

//   Run the TypeScript compiler with the --target flag to specify the ECMAScript version of the output.
//tsc --target es2015 hello.ts

