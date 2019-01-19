function hello(greeting) {
    var names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        names[_i - 1] = arguments[_i];
    }
    return greeting + " " + names + "!";
}
console.log(hello("Hi, ", "codereading", "kang"));
console.log(hello("Hi, "));
