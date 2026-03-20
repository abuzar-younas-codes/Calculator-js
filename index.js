let num1  = Number (prompt ("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");

if (operator == "+"){
    console.log("Result :" + (num1 + num2));
}
else if(operator == "-"){
    console.log("Result :" + (num1 - num2));
}
else if(operator == "*"){
    console.log("Result :" + (num1 * num2));
}
else if(operator == "/"){
    if(num2 == 0){
        console.log("Error: Division by zero is not allowed.");
    }else{
        console.log("Result :" + (num1 / num2));
    }
}
else{
    console.log("Invalid operator. Please enter one of the following: +, -, *, /");
}