const kang = {
    name: "CodeReading",
    age : 32,
    alive: true,
    gender : "male"
}

console.log(typeof kang, kang); 
// object { name: 'CodeReading', age: 32, alive: true, gender: 'male' }

const stringObj = JSON.stringify(kang);
console.log(typeof stringObj, stringObj);
// string {"name":"CodeReading","age":32,"alive":true,"gender":"male"}

const strPrettyObj = JSON.stringify(kang, null, 2);
console.log(typeof strPrettyObj, strPrettyObj);
/*
string {
  "name": "CodeReading",
  "age": 32,
  "alive": true,
  "gender": "male"
}
*/

// 숫자만 필터링
function _filter(key, value) {
    return typeof value === 'number' ? undefined : value;
}

const strFilterObj = JSON.stringify(kang, _filter, 2);
console.log(typeof strFilterObj, strFilterObj);
/*
string {
  "name": "CodeReading",
  "alive": true,
  "gender": "male"
}
*/

// 배열처리
const arr = [1, 5, 'false'];

const strArr = JSON.stringify(arr);
console.log(typeof strArr, strArr); // string [1,5,"false"]

function reaplaceToUpper(key, value) {
    return value.toString().toUpperCase();
}

const strFillterArr = JSON.stringify(arr, reaplaceToUpper);
console.log(strFillterArr);

// 역직렬화

const obj = JSON.parse(strFilterObj);
console.log(typeof obj, obj)
// object { name: 'CodeReading', alive: true, gender: 'male' };

// ajax request

var xhr = new XMLHttpRequest();

xhr.open('GET', '/users');

xhr.send();