// 동적 타입
let foo = 42;
console.log(typeof foo); // number

foo = "bar";
console.log(typeof foo); // string

foo = true;
console.log(typeof foo); // boolean

// 원시 타입
// 문자열 String
const name = "han";

// Number
const age = 30;

// Boolean
const hasjob = true;

// null
const car = null; // 명시적으로 없다를 표현

// undefined
let anything;

// Symbol
const sym = Symbol(); // 유니크한 값을 만들 수 있음

// 참조타입
// Array 배열
const hobbies = ["walking", "book"];

// Object 객체
const address = {
  province: "경기도",
  city: "성남시",
};

// 배열도 객체 중 하나이기 때문에 object로 뜬다.
// isArray() 메소드를 사용하면 확인할 수 있다.
console.log(typeof address); // object
console.log(Array.isArray(address));
console.log(typeof hobbies); // object
console.log(Array.isArray(hobbies));
