function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Brendan", new Date());
//   Compile the code with the TypeScript compiler.
//tsc hello.ts
//   Run the TypeScript compiler with the --noEmitOnError flag to see the error message.
//tsc --noEmitOnError hello.ts
