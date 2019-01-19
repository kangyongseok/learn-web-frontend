function hello(greeting: string, ...names: string[]) {
    return `${greeting} ${names}!`
}

console.log(hello("Hi, ", "codereading", "kang"));
console.log(hello("Hi, "));