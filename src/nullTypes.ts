function sayHi(name: string): void {
    console.log('Hi', name);
}

// sayHi(null); //To make this work make change in tsconfig
// "strictNullChecks": false,
// Don't use it though, it's a bad practice

//Just check for null in the function
function sayHi2(name: string | null): void {
    if (name === null) {
        console.log('Hi there');
    } else {
        console.log('Hi', name);
    }
}

sayHi2(null);