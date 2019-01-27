# JSON 활용

## JSON.stringfy()

문법 `JSON.stringify(value[, replacer[, space]])`  
`value` : JOSN 문자열로 변환할 값  
`replacer` : null 이면 모든 문자열 포함, 특정함수를 사용하여 출력할 값 필터링 가능  
`space` : 문자열 출력에 공백 삽입

**객체생성**

```javascript
const kang = {
    name: "CodeReading",
    age : 32,
    alive: true,
    gender : "male"
}
```

**type확인**
```javascript
console.log(typeof kang, kang); 
// object { name: 'CodeReading', age: 32, alive: true, gender: 'male' }
```

**JSON.stringfy()**
```javascript
const stringObj = JSON.stringify(kang);
console.log(typeof stringObj, stringObj);
// string {"name":"CodeReading","age":32,"alive":true,"gender":"male"}
```

type 이 `object => string` 로 바뀜

**보기좋게 바꾸기**
```javascript
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
```

## JSON.parse()

JSON.stringfy 로 변환한 문자열을 다시 객체로 되돌리는것

```javascript
const obj = JSON.parse(strFilterObj);
console.log(typeof obj, obj)
// object { name: 'CodeReading', alive: true, gender: 'male' };
```
