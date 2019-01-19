function displayType(code) {
    if (typeof (code) === "number")
        console.log('Code is number.');
    else if (typeof (code) === "string")
        console.log('Code is string');
}
console.log(displayType(123));
console.log(displayType("codereading"));
