// console 객체
console.log("안녕하세요!");

console.log("Hello World");
console.log(1234567);
console.log(false);

// 변수 생성 및 출력
var greeting = "안녕하세요";
console.log(greeting);

// 객체 타입
console.log({ a: "a", b: "b" });
console.table({ a: "a", b: "b" });

// 에러 혹은 경고 메세지 보여줄 때
console.error("Error!");
console.warn("Warning!");

// console.time()의 값과 console.timeEnd()의 값이 같아야함
// 출력하는데 얼마만큼의 시간이 걸렸는지 나타냄
console.time("Hello");
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd("Hello");

// 모든 콘솔 지우기
// console.clear();
