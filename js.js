function calculator(string) {
// let string = "5.4 / gf";
const expression = string.split(' ');
const a = expression[0];
const b = expression[1];
const c = expression[2];
const romNum = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const error = 'Throws Error';

if (num1) {}






//перевели в арабские целые числа
const num1
const operator
const num2
if(String(num1) === "NaN" || String(num2) === "NaN"){
    return error;
};

console.log(num1);
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
    default:
        return error;
}
result = Math.round(result);
if (result < 1){
    result = 0
}

let answer = String(result);
console.log(answer);
};
console.log(calculator("5.4 / 10"));