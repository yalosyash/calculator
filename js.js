function calculator(string) {
    // expect string "a b c" - example "5 + 10"
    string = string.toUpperCase();
    const expression = string.split(' ');
    const a = expression[0];
    const b = expression[1];
    const c = expression[2];
    const romNum = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
    const error = 'Throws Error';
    let num1;
    let num2;
    let method;

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
        }
        console.log(result);
        method = result;
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
                console.log("it's not a method");
        }
        if (String(Number(method)) === "NaN") {
            method = error;
        }else if (method < 1) {
            method = Math.floor(method);
        }
    };

    const ifArabic = () => {
        num1 = Math.round(Number(a)); //actions for "a"
        num2 = Math.round(Number(c)); //actions for "c"
        if(String(num1) !== "NaN" && String(num2) !== "NaN"){
            ifMethod();
            console.log("it's Arabic numbers");
        } else {
            console.log("it's not a numbers");
            method = error;
            }
    }

    const ifRome = () => {
        if (romNum.includes(a) && romNum.includes(c)) {
            num1 = romNum.indexOf(a)+1; //actions for "a"
            num2 = romNum.indexOf(c)+1; //actions for "c"
            ifMethod(); //operation
            if (method < 1){
                method = "";
            }; 
            romeConvert();
            console.log("it's Roman numbers")
        } else {
            ifArabic();
        };
    };
    
    ifRome();
    return(String(method));
}; // end of a main function
console.log(calculator("x * x"));

// для проверки
// числа < 0.5
// числа > 0.5
// числа < 1
// Числа > 1