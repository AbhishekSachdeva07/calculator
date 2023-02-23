let a= document.getElementById("read");
function addtoresult(value){
    a.value+=value;
}    
function calculate(operator){
    let expression = a.value;
    if (operator==="%"){
        a.value=eval(expression)/100;
    }
    if (operator==="="){
        a.value=eval(expression);
    }
    else{
        a.value+=operator;
    }
    
} 
function clearresult(){
    a.value="";
}   
