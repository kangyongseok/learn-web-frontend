function greeting(greete: string, name: string) : string {
    return `${greete} ${name} !`;
};

console.log(greeting("Hi", "codereading"));

function hello(greeting: string, name?:string) : string {
    return `${greeting} ${name}!`;
}
console.log(hello("Hello,"));

class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    display = () => console.log(`${this.empCode} ${this.empName}`)
}
let emp = new Employee(1, "coderading");
emp.display();