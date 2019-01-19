function displayType(code: (string | number)) {
    if(typeof(code) === "number") 
        console.log('Code is number.')
    else if(typeof(code) === "string") 
        console.log('Code is string')
}
displayType(123);
displayType("codereading");