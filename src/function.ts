function calculateTax(income : number, taxYear = 2022) : number {
    if(taxYear>2022) 
        return income * 0.15;
    else return income * 0.10;
}

calculateTax(20_000);