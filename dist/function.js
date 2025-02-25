"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear > 2022)
        return income * 0.15;
    else
        return income * 0.10;
}
calculateTax(20000);
//# sourceMappingURL=function.js.map