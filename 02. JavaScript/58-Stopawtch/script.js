// 요소 노드에 접근하기 위해서
const appendTens = document.getElementById("tens");
const appendSeconds = document.getElementById("seconds");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");

let seconds = 0;
let tens = 0;
let interval;
