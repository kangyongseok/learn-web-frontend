function greeting(greete, name) {
    return greete + " " + name + " !";
}
;
console.log(greeting("Hi", "codereading"));
function hello(greeting, name) {
    return greeting + " " + name + "!";
}
console.log(hello("Hello,"));
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        var _this = this;
        this.display = function () { return console.log(_this.empCode + " " + _this.empName); };
        this.empName = name;
        this.empCode = code;
    }
    return Employee;
}());
var emp = new Employee(1, "coderading");
emp.display();
