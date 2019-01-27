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

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee3 extends Person {
    empCode: number;

    constructor(empcode: number, name: string) {
        super(name);
        this.empCode = empcode;
    }

    displayName():void {
        console.log(`Name = ${this.name}, Employess Code = ${this.empCode}`)
    }
}

let emp = new Employee3(100, "Kang");
emp.displayName();