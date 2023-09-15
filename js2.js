const calc = (exp) => {
	(() => {
		const regSymbol = /[^1-9()+-\/*]/g;
		const check = exp.search(regSymbol)
		if (check !== -1) throw new Error("В строке фигня");
	})();
	let string = exp;
	let str = "";
	let num;
	let oper;
	const action = () => {
		let a = Number(num[0]);
		let b = Number(num[1]);
		switch(str[oper]){
			case "*":
				num = a*b;
			break;
			case "/":
				num = a/b;
			break;
			case "+":
				num = a+b;
			break;
			case "-":
				num = a-b;
			break;
		}
		console.log(num);
	}
	const parseIntegs = () => {
		num = str.split(str[oper]);
	}
	const parseOper = () =>{
		const regOper = /[+-\/*]/g;
		oper = str.search(regOper);
		console.log(str[oper])
	}
	const isFirst = () => {
		const srcExp1 = str.search(/[*/]/);
		const srcExp2 = str.search(/[+-]/);
		const notNumber = ["*","/","+","-","(",")"];
		let strNew = "";
		let srcExp;
		srcExp1 !==-1 ? srcExp = srcExp1 : srcExp = srcExp2
		strNew = str[srcExp];
		let n = 1;
		while (!notNumber.includes(str[srcExp+n]) && srcExp+n <= str.length -1){
			strNew += str[srcExp+n];
			n++;
		}
		n = -1;
		while (!notNumber.includes(str[srcExp+n]) && srcExp+n >= 0){
			strNew = str[srcExp+n] + strNew;
			console.log(strNew);
			n--;
		}
		str = strNew;
		parseOper();
		parseIntegs();
		action();
		console.log(str)
	}
	const replacerStr = () => {
		console.log(str)
		if(checkBrackets()){
			string = string.replace(str, str.slice(1, -1));
			console.log(string)
			str = string;
		}
		isFirst();
		string = string.replace(str, num);
		console.log(string);
		str = "";
		num = undefined;
		checkAction();
	}
	const checkBrackets = () => {
		const check = str.slice(1, -1);
		const regNum = check.search(/[^0-9]/);
		if (regNum == -1) {
			return true;
		} return false;
	};
	const parseBrackets = (i) => {
		let n = 0;
		do {
			str = string[i+n] + str;
			n--;
		} while (string[i+n+1] !== "(");
	}
	const isBrackets = () => {
		str = ""
		const rightBracket = string.search(/[)]/);
		const leftBracket = string.search(/[(]/);
		if (rightBracket !== -1 && leftBracket !== -1){
			parseBrackets(rightBracket)
			return str;
		} else return false;
	}
	const structure = () => {
		if (isBrackets()){
			replacerStr();
		} else {
			str = string;
			replacerStr();
		}
	}
	const checkAction = () => {
		const regNum = string.search(/[^0-9]/);
		let boolean
		if (regNum !== -1) {
			boolean = true;
			console.log(boolean);
			structure();
		} else {
			boolean = false;
			console.log(false)	
		}
	}
	checkAction();
	return string;
};
console.log(calc("2+5*4-4/2+(5-2*(1+1))-1*(5-4)")); //2+5*(5+2*2)-1
// a+b*c-d/e+(f-g*(j+k))-i*(x-z)
// 363636+484884*362662-744774/2626626+(252662-47773*(362662+466363))-277373*(3737-27272)