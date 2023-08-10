function calculator(string) {
// let string = "5.4 / gf";
const expression = string.split(' ');
const num1 = Math.round(Number(expression[0]));
const operator = expression[1];
const num2 = Math.round(Number(expression[2]));

if(String(num1) === "NaN" || String(num2) === "NaN"){
    return 'throws Error';
};


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

result = Math.round(result);

if (result < 1){
    result = 0
}


let answer = String(result);
console.log(answer);
};
console.log(calculator("5.4 / 10"));