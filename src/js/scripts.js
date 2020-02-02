
document.getElementById("firstDigit").addEventListener("change", firstForm);
document.getElementById("secondDigit").addEventListener("change", firstForm);
document.getElementById("thirdDigit").addEventListener("change", secondForm);
document.getElementById("fourDigit").addEventListener("change", secondForm);

function firstForm(){
    document.getElementById("firstScore").innerHTML = calculateFirst();
    compareScores();  
}
function secondForm(){
    document.getElementById("secondScore").innerHTML = calculateSecond();
    compareScores();    

}
function calculateFirst(){
    var first = document.getElementById("firstDigit").value;
    var second = document.getElementById("secondDigit").value;
     return multiply(first, second);
}
function calculateSecond(){
    var first = document.getElementById("thirdDigit").value;
    var second = document.getElementById("fourDigit").value;
     return multiply(first, second);
}
function compareScores(){
    var calculateF = calculateFirst();
    var calculateS = calculateSecond();
    var sign;
    if(calculateF==calculateS){
        sign = "="
    }else if(calculateF<calculateS){
        sign = "<"
    }else{
        sign = ">"
    }
    document.getElementById("compareSign").innerHTML = sign;
}

function multiply(first,second){
    return first* second;
}