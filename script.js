function answer(text){
    let pattern = /^[0-9 \+ \- \* \/\(\)]+$/;

    if (!text.match(pattern)) {
        document.getElementById("error").innerHTML = "*Only numbers allowed.";
    }
    else {
        document.getElementById("error").innerHTML = "";
    }
}
function showAns(text){
    const op = text;
    document.getElementById("ans").value = eval(op);    
    console.log(eval(op));
}