// let employee: { id: 1};
// employee.name = "John"; //Error: Property 'name' does not exist on type '{ id: 1; }'.

type Employee = {
    readonly id:number,
    name:string,
    retire: (date: Date) => void
};

let employee: Employee = {
    id:1, 
    name:'Sam',
    retire: (date: Date) => {
        console.log('Retiring on', date);
    }
};



// employee.id=2; //Error: Cannot assign to 'id' because it is a read-only property.
employee.retire(new Date());