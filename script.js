const input = document.getElementById("ans");
const values = {
    'π': 3.14,
    'e': 2.718,
    '^2': '**2',
    '^3': '**3',
    ' mod ': '%',
    ' exp ': '2.718**',
    '^': '**',
    'abs(': 'Math.abs(',
    'floor(': 'Math.floor(',
    'ceil(': 'Math.ceil(',
    '10^': '10**',
    '2^': '2**',
    'sqrt(': 'Math.sqrt(',
    'cbrt(': 'Math.cbrt(',
    'log(': 'Math.log10(',
    'ln(': 'Math.log(',
    'log2(': 'Math.log2(',
    'sin(': 'Math.sin(',
    'cos(': 'Math.cos(',
    'tan(': 'Math.tan(',
    'cosec(': '1/Math.sin(',
    'sec(': '1/Math.cos(',
    'cot(': '1/Math.tan(',
    'fact(': 'factorial(',
    'asin(': 'Math.asin(',
    'acosec(': '1/Math.asin(',
    'acos(': 'Math.acos(',
    'asec(': '1/Math.acos(',
    'atan(': 'Math.atan(',
    'acot(': '1/Math.atan(',
    'sinh(': 'Math.sinh(',
    'cosech(': '1/Math.sinh(',
    'cosh(': 'Math.cosh(',
    'sech(': '1/Math.cosh(',
    'tanh(': 'Math.tanh(',
    'coth(': '1/Math.tanh(',
}
var result = '';
var output;
function factorial(data) {
    let fact = 1;
    for (let i = 1; i <= data; i++) {
        fact = fact * i;
    }
    return fact;
}
function putdata(data) {
    input.value += data;
    for (let x in values) {
        if (x == data) {
            data = values[x];
        }
    }
    result += data;
}
function storeinMemory() {
    console.log(result);
}

function clearText() {
    input.value = "";
    result = '';
}
function deleteChar() {
    let str = input.value;
    str = str.slice(0, -1);
    input.value = str;
    result = result.slice(0, -1);
    if (input.value.length == 0) {
        result = ''
    }
}

function showAns() {
    let count = 0, pattern1 = /[\(]/g, pattern2 = /[\)]/g;
    try {
        let op;
        if (result == 0) {
            op = input.value;
        }
        else {
            op = result;
        }
        count = op.replace(pattern1, "").length;
        // console.log(op.match(pattern2).length);
        if (count != op.replace(pattern2, "").length) {
            // alert("Hello")
            throw "*Put valid paranthesis.";
        }
        output = eval(op);
        document.getElementById("ans").value = output;
        document.getElementById("error").innerHTML = "";
    }
    catch (e) {
        // alert(e);
        document.getElementById("error").innerHTML = "*Enter valid expression.<br>" + e;
    }
}

function storeinMemory(value) {
    let data;
    if (value == "MS") {
        localStorage.setItem('calcdata', input.value);
    }
    if (value == "MC") {
        localStorage.clear();
    }
    if (value == "MR") {
        data = localStorage.getItem('calcdata');
        input.value = data;
    }
    if (value == "M+") {
        let exp;
        data = localStorage.getItem('calcdata');
        exp = input.value + '+' + data;
        input.value = eval(exp);
    }
    if (value == "M-") {
        let exp;
        data = localStorage.getItem('calcdata');
        exp = input.value + '-' + data;
        input.value = eval(exp);
    }
}
function second_menu() {
    let first_class = document.getElementsByClassName("first");
    let second_class = document.getElementsByClassName("second");
    let style = getComputedStyle(document.querySelector(".first")).display;
    if (style == "inline-block") {
        for (let i = 0; i < 6; i++) {
            first_class[i].style.display = "none";
            second_class[i].style.display = "inline-block";
        }
    }
    else {
        for (let i = 0; i < 6; i++) {
            first_class[i].style.display = "inline-block";
            second_class[i].style.display = "none";
        }
    }
}
function inverse_menu() {
    let basic = document.getElementsByClassName("basic");
    let inverse = document.getElementsByClassName("inverse");
    let hyp = document.getElementsByClassName("hyp");
    let basic_style = getComputedStyle(document.querySelector(".basic")).display;
    let hyp_style = getComputedStyle(document.querySelector(".hyp")).display;
    if (basic_style == "inline-block" || hyp_style == "inline-block") {
        for (let i = 0; i < 6; i++) {
            basic[i].style.display = "none";
            hyp[i].style.display = "none";
            inverse[i].style.display = "inline-block";
        }
    }
    else {
        for (let i = 0; i < 6; i++) {
            basic[i].style.display = "inline-block";
            inverse[i].style.display = "none";
        }
    }
}
function hyp_menu() {
    let basic = document.getElementsByClassName("basic");
    let inverse = document.getElementsByClassName("inverse");
    let hyp = document.getElementsByClassName("hyp");
    let basic_style = getComputedStyle(document.querySelector(".basic")).display;
    let inverse_style = getComputedStyle(document.querySelector(".inverse")).display;
    if (basic_style == "inline-block" || inverse_style == "inline-block") {
        for (let i = 0; i < 6; i++) {
            basic[i].style.display = "none";
            inverse[i].style.display = "none";
            hyp[i].style.display = "inline-block";
        }
    }
    else {
        for (let i = 0; i < 6; i++) {
            basic[i].style.display = "inline-block";
            hyp[i].style.display = "none";
        }
    }
}