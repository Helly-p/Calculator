// Dropdown Menu Stop toggling
const dropdown_menu = document.getElementsByClassName("menus");
for (let i = 0; i < 2; i++) {
  dropdown_menu[i].addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

// Calc Functionalities
const input = document.getElementById("input");
const values = {
  π: 3.14,
  E: 2.718,
  "^2": "**2",
  "^3": "**3",
  " mod ": "%",
  " exp ": "2.718**",
  "^": "**",
  "abs(": "Math.abs(",
  "floor(": "Math.floor(",
  "ceil(": "Math.ceil(",
  "10^": "10**",
  "2^": "2**",
  "sqrt(": "Math.sqrt(",
  "cbrt(": "Math.cbrt(",
  "log(": "Math.log10(",
  "ln(": "Math.log(",
  "log2(": "Math.log2(",
  "sin(": "Math.sin(",
  "cos(": "Math.cos(",
  "tan(": "Math.tan(",
  "cosec(": "1/Math.sin(",
  "sec(": "1/Math.cos(",
  "cot(": "1/Math.tan(",
  "fact(": "factorial(",
  "sinI(": "Math.asin(",
  "cosecI(": "1/Math.asin(",
  "cosI(": "Math.acos(",
  "secI(": "1/Math.acos(",
  "tanI(": "Math.atan(",
  "cotI(": "1/Math.atan(",
  "sinh(": "Math.sinh(",
  "cosech(": "1/Math.sinh(",
  "cosh(": "Math.cosh(",
  "sech(": "1/Math.cosh(",
  "tanh(": "Math.tanh(",
  "coth(": "1/Math.tanh(",
};
var result = "";
var output;
var ans = document.getElementById("ans");

// Factorial Function
function factorial(data) {
  let fact = 1;
  for (let i = 1; i <= data; i++) {
    fact = fact * i;
  }
  return fact;
}

// Putting value in INput field
function putdata(data) {
  input.value += data;
}

// Memory Function : MS, MR, M+, M-
function storeinMemory() {
  console.log(result);
}

// CE function
function clearText() {
  input.value = "";
  result = "";
  ans.innerHTML = "Output : 0";
}

// Delete Character
function deleteChar() {
  let str = input.value;
  str = str.slice(0, -1);
  input.value = str;
  result = result.slice(0, -1);
  if (input.value.length == 0) {
    result = "";
  }
}

// Show Output
function showAns() {

  let count = 0,
    pattern1 = /[\(]/g,
    pattern2 = /[\)]/g;

  try {
      let op,
      inp = input.value;
      for (let x in values) {
        if (inp.includes(x)) {
          inp = inp.replaceAll(x, values[x]);
        }
      }
      if (inp.includes("E")) {
        inp = inp.replaceAll("E", 2.718);
      }
      op = inp;
      count = op.replace(pattern1, "").length;
      if (count != op.replace(pattern2, "").length) {
        throw "*Put valid paranthesis.";
      }
      output = eval(op);
      ans.innerHTML = "Output : " + output;
      document.getElementById("error").innerHTML = "";
      input.value = "";
  } 
  catch (e) {
      document.getElementById("error").innerHTML = "*Enter valid expression.<br>" + e;
  }
}

// Memory function
function storeinMemory(value) {
  let data,
    exp = "";

  switch (value) {
    case "MS":
      localStorage.setItem("calcdata", input.value);
      break;
    case "MC":
      localStorage.clear();
      break;
    case "MR":
      data = localStorage.getItem("calcdata");
      ans.innerHTML = "Memory Recall : " + data;
      break;
    case "M+":
      data = localStorage.getItem("calcdata");
      exp = input.value + "+" + data;
      input.value = eval(exp);
      ans.innerHTML = "Memory Value Addition : " + eval(exp);
      break;
    case "M-":
      data = localStorage.getItem("calcdata");
      exp = input.value + "-" + data;
      input.value = eval(exp);
      ans.innerHTML = "Memory Value Subtraction : " + eval(exp);
      break;
  }
}

// All toggle menus

// 2nd Layout
function second_menu() {
  let first_class = document.getElementsByClassName("first");
  let second_class = document.getElementsByClassName("second");
  let style = getComputedStyle(document.querySelector(".first")).display;

  for (let i = 0; i < 6; i++) {

    if (style == "inline-block") {
        first_class[i].style.display = "none";
        second_class[i].style.display = "inline-block";
    }
    else {
          first_class[i].style.display = "inline-block";
          second_class[i].style.display = "none";
    }  
  } 
}

// Inverse Trigo Toggle menu
function inverse_menu() {
  let basic = document.getElementsByClassName("basic");
  let inverse = document.getElementsByClassName("inverse");
  let hyp = document.getElementsByClassName("hyp");
  let basic_style = getComputedStyle(document.querySelector(".basic")).display;
  let hyp_style = getComputedStyle(document.querySelector(".hyp")).display;
  
  for (let i = 0; i < 6; i++) {
  
    if (basic_style == "inline-block" || hyp_style == "inline-block") {
      basic[i].style.display = "none";
      hyp[i].style.display = "none";
      inverse[i].style.display = "inline-block";
    } else {
      basic[i].style.display = "inline-block";
      inverse[i].style.display = "none";
    }

  }
}

// Hyperbola Trigo Toggle Menu
function hyp_menu() {
  let basic = document.getElementsByClassName("basic");
  let inverse = document.getElementsByClassName("inverse");
  let hyp = document.getElementsByClassName("hyp");
  let basic_style = getComputedStyle(document.querySelector(".basic")).display;
  let inverse_style = getComputedStyle(
    document.querySelector(".inverse")
  ).display;

  for (let i = 0; i < 6; i++) {

    if (basic_style == "inline-block" || inverse_style == "inline-block") {
      basic[i].style.display = "none";
      inverse[i].style.display = "none";
      hyp[i].style.display = "inline-block";
    } else {
      basic[i].style.display = "inline-block";
      hyp[i].style.display = "none";
    }
  
  }
}
