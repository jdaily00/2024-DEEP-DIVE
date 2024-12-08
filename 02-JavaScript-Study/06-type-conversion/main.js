// 1. JavaScript 함수를 사용해서 변환
let val;

// val = 111;
val = String(111);
val = 8 + 4;
console.log(val); // 12
console.log(typeof val); // number

// number to String 변환
val = String(111);
val = String(8 + 4);
console.log(val); // 12
console.log(typeof val); // string
console.log(val.length); // 2

// boolean to string
val = false;
console.log(val); // false
console.log(typeof val); // boolean

val = String(false);
console.log(val); // false
console.log(typeof val); // string
console.log(val.length); // 5

// date to string
val = new Date();
console.log(val); // Wed Nov 27 2024 23:55:01 GMT+0900 (한국 표준시)
console.log(typeof val); // object
console.log(val.length); // undefined

val = String(new Date());
console.log(val); // Wed Nov 27 2024 23:55:01 GMT+0900 (한국 표준시)
console.log(typeof val); // string
console.log(val.length); // 42

// array to string
val = [1, 2, 3, 4, 5];
console.log(val); // (5) [1, 2, 3, 4, 5]
console.log(typeof val); // object
console.log(val.length); // 5

val = String([1, 2, 3, 4, 5]);
console.log(val); // 1,2,3,4,5
console.log(typeof val); // string
console.log(val.length); // 9

// toString()
val = (5).toString();
console.log(val); // 5
console.log(typeof val); // string
console.log(val.length); // 1

// String to number
val = Number("1");
console.log(val); // 1
console.log(typeof val); // number
console.log(val.length); // undefined

val = Number(true); // 1, number
val = Number(false); // 0, number
val = Number(null); // 0, number
val = Number([1, 2, 3]); // NaN = Not a Number, number

console.log(val);
console.log(typeof val);

val = "111.40"; // 111.40, string
val = parseInt("111.40"); // 111, number
val = parseFloat("111.40"); // 111.4, number
console.log(val);

// 2. JavaScript 자체에 의해 자동으로 타입 변환
const val1 = 2;
const val2 = 3;

const sum = val1 + val2;
console.log(sum); // 5
console.log(typeof sum); // number

const val3 = String(2);
const val4 = 3; // number에서 자동으로 string으로 변환됨

const sum2 = val3 + val4;
console.log(sum2); // 23
console.log(typeof sum2); // string
