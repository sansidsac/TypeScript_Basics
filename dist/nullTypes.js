"use strict";
function sayHi(name) {
    console.log('Hi', name);
}
function sayHi2(name) {
    if (name === null) {
        console.log('Hi there');
    }
    else {
        console.log('Hi', name);
    }
}
sayHi2(null);
//# sourceMappingURL=nullTypes.js.map