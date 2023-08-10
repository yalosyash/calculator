let string = "5 + 10";
const expression = string.split(' ');
const num1 = Number(expression[0]);
const operator = expression[1];
const num2 = Number(expression[2]);

let result;
switch(operator){
    case "+":
        result = num1+num2;
    break;
    case "-":
        result = num1-num2;
    break;
    case "/":
        result = num1/num2;
    break;
    case "*":
        result = num1*num2;
    break;
}


console.log(result);
console.log(num1);