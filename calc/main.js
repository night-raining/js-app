"use strict";

// Initilization of calculator screen value
let box = document.getElementById("display");
box.value = "";

// append character to screen
function addToScreen(e) {
  box.value += e;
  if (e == "c") {
    resetScreen();
  }
}

// reset screen
function resetScreen() {
  box.value = '';
}

// evaluate a mathematical expression string
function answer() {
  let s = box.value;
  box.value  = String(eval(s));
}

function backSpace() {
  let s = box.value;
  let len = s.length;
  if (len > 0) {
    s = s.slice(0, len-1);
  }
  box.value = s;
}

function power(y) {
  let x = box.value;
  box.value = Math.pow(x, y);
}