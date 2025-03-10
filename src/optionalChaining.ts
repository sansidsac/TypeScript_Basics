type Customer = {
    birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined{
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);

//Optional property access oprator
console.log(customer?.birthday?.getFullYear);

//Optional element access operator
// customer?.[0]

//Optional call operator
let log: any = null;
log?.('Hello');
