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
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function multiplyAll(values, factor) {
    if (!values) { //if values is null or undefined
        return values;
    }
    else {
        return values.map(function (x) { return x * factor; });
    }
}
//Equality narrowing --------------------------------------------------------
function example(x, y) {
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
function printAll2(strs) {
    if (strs !== null) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_2 = strs; _i < strs_2.length; _i++) {
                var s = strs_2[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function multiplyValue(container, factor) {
    // Remove both 'null' and 'undefined' from the type.
    if (container.value != null) {
        console.log(container.value);
        // Now we can safely multiply 'container.value'.
        container.value *= factor;
    }
}
//instanceof narrowing ------------------------------------------------------
function logValue(x) {
    if (x instanceof Date) { //x is of type Date
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
//Assignments ----------------------------------------------------------------
var x = Math.random() < 0.5 ? 10 : "hello world!"; //x is of type string | number
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
}
