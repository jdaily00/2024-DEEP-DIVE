function func() {
  if (true) {
    var a = "a";
    console.log(a); // 'a'
  }
  console.log(a); // 'a'
}

func();
console.log(a); // Uncaught ReferenceError: a is not defined
