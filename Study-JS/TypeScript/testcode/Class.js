var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
var Employee2 = /** @class */ (function () {
    function Employee2(empcode, name) {
        this.empCode = empcode;
        this.empName = name;
    }
    return Employee2;
}());
var empObj = new Employee(100, "CodeReading");
console.log(empObj);
