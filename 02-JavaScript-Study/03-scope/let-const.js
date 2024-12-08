function func() {
  if (true) {
    let a = "a";
    const b = "b";
    console.log(a); // 'a'
    console.log(b); // 'b'
  }
  console.log(a); // Uncaught ReferenceError: a is not defined
  console.log(b); // Uncaught ReferenceError: b is not defined
}

func();
console.log(a); // Uncaught ReferenceError: a is not defined
console.log(b); // Uncaught ReferenceError: b is not defined
