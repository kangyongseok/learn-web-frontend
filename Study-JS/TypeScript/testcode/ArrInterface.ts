interface NumList {
    [index:number]:number
}
let numArray: NumList = [1, 2, 3];
numArray[0];
numArray[1];

interface Employee {
    empCode: number;
    empName: string;
    empdept?: string;
}

let empObj1: Employee = {
    empCode:1, 
    empName: "CodeReading"
}

console.log(empObj1)