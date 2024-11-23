const greeting = "hello";
console.log(greeting);

// 중복 선언 불가
// const greeting = "hi";
// console.log(greeting);

// 재할당 불가
// greeting = "how are you?";
// console.log(greeting);

// 배열과 객체의 값을 변경하는 것은 가능
const arrayList = [1, 2, 3];
arrayList.push(4);
console.log(arrayList);

const objectList = { a: "a", b: "b" };
objectList.c = "c";
console.log(objectList);
