var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
console.log(empObj); //{ empName: 'CodeReading', empCode: 100 }
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee3 = /** @class */ (function (_super) {
    __extends(Employee3, _super);
    function Employee3(empcode, name) {
        var _this = _super.call(this, name) || this;
        _this.empCode = empcode;
        return _this;
    }
    Employee3.prototype.displayName = function () {
        console.log("Name = " + this.name + ", Employess Code = " + this.empCode);
    };
    return Employee3;
}(Person));
var emp = new Employee3(100, "Kang");
emp.displayName();
