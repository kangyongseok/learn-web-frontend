# TypeScript
![TypeScript](https://img.shields.io/badge/typescript-v3.2.2-orange.svg)

## 타입스크립트란

마이크로소프트에서 개발 및 유지관리하며 Apache 2 라이센스에 따라 사용이 허가된 오픈소스객체지향언어

일반 자바스크립트로 컴파일되는 자바스크립트의 형식화된 더 광범위한 세트

## why TypeScript

자바스크립트는 오늘날 많은 발전을 이루어 천대받던 언어에서 서버와 백엔드까지 아우르며 NodeJS, React.js, Angular 등 프레임워크들을 만들어 내기도 했다.

그러나 이렇게 발전한것과 달리 C 나 JAVA 같이 잘 구조화되어있지않은 아주 동적인 프로그래밍 언어이다.

유형을 갖게되면 코드품질, 가독성을 높이고 코드기반을 유지보수하고 리팩터링하기 쉽고 예상하지못한 오류를 사전에 방지할수가 있다.

여기서 중요한점은 타입스크립트를 사용하게되면 런타임이 아닌 컴파일단계에서 오류를 찾아낼수 있어 훨씬 안정적이고 오류없는 코드작성이 가능하다는 것이다.

형식시스템이 없으면 코드가 늘어나고 규모있는 프로젝트를 진행할때 확장하거나 기능을 추가하고 수정하기 어려워진다.

타입스크립트는 컴파일을통해 `.ts => .js` 로 변환되고 `js` 의 코드를 그대로 `.ts` 에 가져다 써도 아무 문제가 없다.

## 첫번째 타입스크립트

타입스크립트의 사용법과 컴파일 후의 .js 파일의 내용을 확인한다.

**add.ts**
```javascript
function addNumbers(a: number, b: number) {
    return a + b;
}

var sum: number = addNumbers(10, 20);
console.log(`Sum of the two numbers is : ${sum}`);
```

compile 명령어
```
tsc add.ts
```


**add.js**
```javascript
function addNumbers(a, b) {
    return a + b;
}
var sum = addNumbers(10, 20);
console.log("Sum of the two numbers is : " + sum);

```

두 소스의 차이점은 변수와 인자선언시 어떤 형태로 받아올지 `type` 을 지정해 준다는것이다. 

만약 타입을 잘못 지정해준다면 컴파일 과정에서 오류를 찾아낸다.

**add.ts**
```javascript
function addNumbers(a: number, b: number) {
    return a + b;
}

var sum: number = addNumbers(10, "codereading");
console.log(`Sum of the two numbers is : ${sum}`);
```

**error**
```typescript
add.ts:5:34 - error TS2345: Argument of type '"codereading"' is not assignable to parameter of type 'number'.

5 var sum: number = addNumbers(10, "codereading");
                                   ~~~~~~~~~~~~~

Found 1 error.
```

## TypeScript 데이터 형식(배열)

**배열선언의 두가지 방식**
```typescript
let fruits1: string[] = ['Apple', 'Orange', 'Banana'];
let fruits2: Array<string> = ['Apple', 'Orange', 'Banana'];
```

**다중 유형 배열**
```typescript
let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
```

**Array.js**
```javascript
var fruits1 = ['Apple', 'Orange', 'Banana'];
var fruits2 = ['Apple', 'Orange', 'Banana'];
var values = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
```

## TypeScript 데이터 형식(튜플)
튜플은 서로 다른 데이터 유형의 두 세트의 값을 포함하는 새로운 데이터 유형  
TypeScript 에서 도입한 새로운 데이터 형식

```typescript
var employee: [number, string] = [1, "codereading"];
```

**Tuple.js**
```javascript
var employee = [1, "codereading"];
```

배열과 튜플이 같아 보일 수 있는데 가장 큰 차이점은 `Tuple` 은 지정한 타입의 갯수만큼만 변수를 입력 할 수 있다는 것이다.

```typescript
var employee2: [number, string] = [1, "codereading", 3, "kang"];
```

**error**
```typescript
Tuple.ts:3:5 - error TS2322: Type '[number, string, number, string]' is not assignable to type '[number, string]'.
  Types of property 'length' are incompatible.
    Type '4' is not assignable to type '2'.

3 var employee2: [number, string] = [1, "codereading", 3, "kang"];
      ~~~~~~~~~

Found 1 error.
```

동일한점은 배열과 튜플은 모두 배열의 메서드 사용이 가능하다.

## TypeScript 데이터 형식(열거형)
`enum` 을 사용하면 숫자 또는 문자열이 값이 될 수 있는 관련값의 모음 상수집합을 선언할 수 있습니다.

1. 숫자열거형
2. 문자열거형
3. 혼합열거형

### 숫자열거형
```typescript
// 기본형태
enum PrintMedia {
    Newspaper,
    Newsletter,
    Magazine,
    Book
}
```

**ednum.js**
```javascript
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 0] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 1] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 2] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 3] = "Book";
})(PrintMedia || (PrintMedia = {}));
```

**console.log**
```cmd
{ '0': 'Newspaper',
  '1': 'Newsletter',
  '2': 'Magazine',
  '3': 'Book',
  Newspaper: 0,
  Newsletter: 1,
  Magazine: 2,
  Book: 3 }
```

컴파일해서 확인해보면 기본형태 선언시 첫번째는 0의 값을 기본적으로 가지며 순차적으로 1씩 증가하는 값을 가지는걸 확인이 가능하다.

로그창에 찍힌 결과가 두번씩 나타나는데 서로 다른 key 값와 value 값이 들어가있지만 결국 뒤집으면 똑같은데 이걸 역 매핑이라고 한다. 

```typescript
// 기본값 할당
enum PrintMedia {
    Newspaper = 1,
    Newsletter =  5,
    Magazine = 5,
    Book = 10
}
```

**활용**
```typescript
// 반환
enum PrintMedia2 {
    Newspaper = 1,
    Newsletter =  4,
    Magazine = 5,
    Book = 10
}

function getMedia(mediaName: string): PrintMedia2 {
    if(mediaName == 'Fobes' || mediaName === 'Outlook') {
        return PrintMedia2.Magazine;
    }
}

let mediaType: PrintMedia2 = getMedia('Fobes'); // 5

// 계산
enum PrintMediaMath {
    Newspaper = 1,
    Newsletter = getPrintMediaCode('newsletter'),
    Magagine = Newsletter * 3,
    Book  = 10
}

function getPrintMediaCode(mediaName: string): number {
    if(mediaName === 'newsletter') {
        return 5;
    }
}

console.log(PrintMediaMath.Newsletter); // 5
console.log(PrintMediaMath.Magagine); // 15
```


### 문자 열거형
```typescript
// 문자열 열거형
enum PrintMediaString {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magagine = "MAGAZINE",
    Book = "BOOK"
}

console.log(PrintMediaString.Newspaper); // NEWSPAPER
console.log(PrintMediaString['Magagine']); // MAGAZINE
```

숫자열거형과 다르게 문자는 개별적으로 초기화값을 지정해 주어야 합니다.  
문자열거형은 숫자열거형처럼 역매핑을 지원하지 않습니다.

### 혼합열거형
```typescript
// 혼합
enum Status {
    Avtive = 'ACTIVE',
    Deactive = 1,
    Pending
}

console.log(Status);
```

**console.log**
```cmd
{ '1': 'Deactive',
  '2': 'Pending',
  Avtive: 'ACTIVE',
  Deactive: 1,
  Pending: 2 }
```

## TypeScript 데이터 형식(유니온타입)
여러경우중 하나 인 타입의 표현이 가능
```typescript
let code: (string | number);
code = 123; // OK
code = "ABC"; // OK
code = false; // Compile Error
```

**함수파라미터로의 유니온타입**
```typescript
function displayType(code: (string | number)) {
    if(typeof(code) === "number") 
        console.log('Code is number.')
    else if(typeof(code) === "string") 
        console.log('Code is string')
}
displayType(123); // Code is number.
displayType("codereading"); // Code is string
```

## TypeScript 데이터 형식(Any)
any 타입은 어떠한 타입의 변수도 들어올수 있는 타입입니다.  
```typescript
let something: any = "Hello world";
something = 23; // OK
something = true; // OK
```

## TypeScript 데이터 형식(void)
void 는 `null` 과 `undefined` 값만 가질 수 있기때문에 변수에 지정하는것은 의미가 없고 주로 함수의 반환값이 없을때 선언하는 데이터 타입입니다.

```typescript
function sayHi() : void {
    console.log("Hi");
}
```

## TypeScript 함수
```typescript
function greeting(greete: string, name: string) : string {
    return `${greete} ${name} !`;
};

console.log(greeting("Hi", "codereading")); // Hi codereading !
```

타입스크립트에서는 선택적 매개변수 기능이 있어 매개변수의 값을 받을수도 받지않을수도 있습니다. 방ㅂ버은 매개변수에 `?` 기호를 붙임으로써 가능합니다.

```typescript
function hello(greeting: string, name?:string) : string {
    return `${greeting} ${name}!`;
}
console.log(hello("Hello,")) // Hello, undefined!
```

**화살표함수**
```typescript
// 매개변수 있을때
let sum = (x: number, y: number): number => {
    return x + y;
}

// 매개변수가없을떄
let print = () => console.log("Hi JavaScript");
print();

// 클래스의 화살표 함수
class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    display = () => console.log(`${this.empCode} ${this.empName}`)
}
let emp = new Employee(1, "coderading");
emp.display();
```

## TypeScript 나머지 매개변수
```typescript
function hello(greeting: string, ...names: string[]) {
    return `${greeting} ${names}!`
}

console.log(hello("Hi, ", "codereading", "kang")); // Hi,  codereading,kang!
console.log(hello("Hi, ")); // Hi,  !

// 화살표함수사용
let hello = (greeting: string, ...names: string[]) => {
    return `${greeting} ${names}!`
}
```

주의! : 나머지매개변수는 함수정의에서 항상 마지막에 위치해야합니다.  
`let hello = (변수, 변수, 변수...., 나머지매개변수)`  

## Interface
인터페이스는 응용프로그램에서 규약을 정의하는 구조입니다.  
인터페이스에서 파생된 클래스는 인터페이스의 구조를 따라야 합니다.  

```typescript
interface KeyPair {
    key: number;
    value: string;
}

let key1: KeyPair = {key:1, value: "codereading"}; // OK
let key2: KeyPair = {key:2, val: "kang"}; // Compile Error
let key3: KeyPair = {key:3, value:100}; // Compile Error
```

**함수에 적용한 Interface**
```typescript
interface KeyValueProcessor {
    (key: number, value: string) : void;
};

function addKeyValue(key:number, value: string): void {
    console.log(`addKeyValue: key = ${key}, value = ${value}`)
}

function updatedKeyValue(key: number, value: string): void {
    console.log(`updatedKeyValue: key = ${key}, value = ${value}`)
}

let keyPrint: KeyValueProcessor = addKeyValue;
keyPrint(1, "codereading"); // addKeyValue: key = 1, value = codereading

keyPrint = updatedKeyValue;

keyPrint(2, "kang"); // updatedKeyValue: key = 2, value = kang
```

**배열에 적용한 인터페이스**
```typescript
interface NumList {
    [index:number]:number
}
let numArray: NumList = [1, 2, 3];
numArray[0];
numArray[1];
```

**선택적 속성**
```typescript
interface Employee {
    empCode: number;
    empName: string;
    empdept?: string;
}

let empObj1: Employee = {
    empCode:1, 
    empName: "CodeReading"
}
```

**읽기전용 속성**
```typescript
interface Citizen {
    name: string;
    readonly SSN: number;
}

let personObj: Citizen = {SSN: 110555444, name: "Codereading"}
personObj.name = "Kang";
personObj.SSN = 1234566777; // Compile Error
```

**인터페이스 확장**
```typescript
interface Person {
    name: string;
    gender: string;
}

interface Employee extends Person {
    empCode: number;
}

let empObj: Employee = {
    empCode: 1,
    name:"CodeReading",
    gender: "Male"
}
```

## Class
```typescript
class Employee{
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    getSalary() : number {
        return 10000;
    }
}
```

**Class.js**
```javascript
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

```
컴파일된 `.js` 소스를 보면 클로저를 사용하는 방식으로 컴파일 되어있는것이 확인 가능합니다.

**constructor**  
객체를 만들때 호출되는 특별한 유형의 메서드입니다.

**class 의 객체 만들기**
```typescript
class Employee {
    empCode: number;
    empName: string;
}

let empObj = new Employee();
```

그러나 이상태로는 인자값을 전달 해 줄수 없기때문에 생성자 즉 `constructor` 를 사용하여 매개변수를 받을 수 있다.

```typescript
class Employee {
    empCode: number;
    empName: string;

    constructor(empcode: number, name: string) {
        this.empCode = empcode;
        this.empName = name;
    }
}

let empObj = new Employee(100, "CodeReading");
console.log(empObj); //{ empName: 'CodeReading', empCode: 100 }
```

