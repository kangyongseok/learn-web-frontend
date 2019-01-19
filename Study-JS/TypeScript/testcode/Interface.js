;
function addKeyValue(key, value) {
    console.log("addKeyValue: key = " + key + ", value = " + value);
}
function updatedKeyValue(key, value) {
    console.log("updatedKeyValue: key = " + key + ", value = " + value);
}
var keyPrint = addKeyValue;
keyPrint(1, "codereading");
keyPrint = updatedKeyValue;
keyPrint(2, "kang");
