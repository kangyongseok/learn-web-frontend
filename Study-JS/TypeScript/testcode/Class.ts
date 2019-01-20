class Employee{
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}


class Employee2 {
    empCode: number;
    empName: string;

    constructor(empcode: number, name: string) {
        this.empCode = empcode;
        this.empName = name;
    }
}

let empObj = new Employee(100, "CodeReading");
console.log(empObj); //{ empName: 'CodeReading', empCode: 100 }