const input = document.getElementById("ans");
const values = {
    'π':3.14,
    'e':2.718,
    '^2':'**2',
    ' mod ' : '%',
    ' exp ' : '2.718**',
    '^':'**',
    'abs(':'Math.abs(',
    'floor(':'Math.floor(',
    'ceil(':'Math.ceil(',
    '10^' : '10**',
    'sqrt(' : 'Math.sqrt(',
    'log(' : 'Math.log10(',
    'ln(':'Math.log(',
    'sin(':'Math.sin(',
    'cos(':'Math.cos(',
    'tan(':'Math.tan(',
    'cosec(':'1/Math.sin(',
    'sec(':'1/Math.cos(',
    'cot(':'1/Math.tan(',
    'fact(':'factorial('
}
var result = '';
var output;
function factorial(data){
    let fact =1;
    for(let i=1;i<=data;i++){
        fact = fact*i;
    }
    return fact;
}
function answer(text){
    let pattern = /^[0-9 \+ \- \* \/\(\) \. \^]+$/;

    if (!text.match(pattern)) {
        document.getElementById("error").innerHTML = "*Enter valid characters.";
    }
    else {
        document.getElementById("error").innerHTML = "";
    }
}
function putdata(data){
    input.value += data;
    for(let x in values){
        if(x == data){
            data = values[x];
        }
    }
    result += data;
    // console.log("Putdata")
    // console.log(result);
}
function storeinMemory(){
    console.log(result);
}

function clearText(){
    input.value = "";
    result = '';
}
function deleteChar(){
    let str = input.value;
    str = str.slice(0,-1);
    input.value = str;
    result = result.slice(0,-1);
    if(input.value.length == 0){
        result = ''
    }
}

function showAns(){
    let op;
    if(result == 0){
        op = input.value;
    }
    else{
        op = result; 
    }
    output = eval(op);
    document.getElementById("ans").value = output;    
}

function storeinMemory(value){
    let data;
    if(value == "MS"){
        localStorage.setItem('calcdata',input.value);
    }
    if(value == "MC"){
        localStorage.clear();
    }
    if(value == "MR"){
        data = localStorage.getItem('calcdata');
        input.value = data;
    }
    if(value == "M+"){
        let exp;
        data = localStorage.getItem('calcdata');
        exp = input.value + '+' + data;
        input.value = eval(exp);
    }
    if(value == "M-"){
        let exp;
        data = localStorage.getItem('calcdata');
        exp = input.value + '-' + data;
        input.value = eval(exp);
    }
}
