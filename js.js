function calculator(string) {
    // expect string "a b c" - example "5 + 10"
    string = string.toUpperCase();
    const expression = string.split(' ');
    const a = expression[0];
    const b = expression[1];
    const c = expression[2];
    const romNum = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    let num1;
    let num2;
    let method;
    const ifRome = () => {
        ifMethod();
        if (method < 1){
            method = "";
            };
        romeConvert();
        };
    const ifMethod = () => {
        switch(b){
            case "+":
                method = num1+num2;
            break;
            case "-":
                method = num1-num2;
            break;
            case "/":
                method = num1/num2;
            break;
            case "*":
                method = num1*num2;
            break;
            default:
                throw new Error("it's not a method");
        };
        method = Math.floor(method);
    };
    const romeConvert = () => {
        const arrInt = [1,4,5,9,10,40,50,90,100];
        const arrRom = ["I","IV","V","IX","X","XL","L","XC","C"];
        let result = "";
        let n = arrInt.length - 1;
        while (method > 0) {
            if (method >= arrInt[n]) {
                result += arrRom[n];
                method -= arrInt[n];
            } 
            else n--;
        };
        method = result;
    };
    const ifArabic = () => {
        num1 = Math.floor(Number(a));
        num2 = Math.floor(Number(c));
        if(String(num1) !== "NaN" && String(num2) !== "NaN" && num1 <= 10 && num2 <= 10){
            ifMethod();
        } 
        else {
            throw new Error("it's not an Arabic numbers");
        };
    };
    try{
        if (!string || string === "" || a === "" || b === "" || c === "") {
            throw Error("it's not an expression");
        } else if (romNum.includes(a) && romNum.includes(c)) {
            num1 = romNum.indexOf(a)+1;
            num2 = romNum.indexOf(c)+1;
        ifRome();
        } else {
            ifArabic();
        };
        return(String(method));
    }
    catch (error){
        console.error(error);
        return;
    };
}; // end of a main function
console.log(calculator('10 + 10'));