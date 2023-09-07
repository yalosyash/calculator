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
	}
	const parseIntegs = () => {
		num = str.split(str[oper]);
	}
	const parseOper = () =>{
		const regOper = /[+-\/*]/g;
		oper = str.search(regOper);
	}
	const isFirst = () => {
		const srcExp1 = str.search(/[*/]/);
		const srcExp2 = str.search(/[+-]/);
		const notNumber = ["*","/","+","-","(",")"];
		let strNew = "";
		let n = 1;
		let srcExp;
		srcExp1 !==-1 ? srcExp = srcExp1 : srcExp = srcExp2
		strNew = str[srcExp];
		do {
			strNew += str[srcExp+n]
			n++;
		} while (!notNumber.includes(str[srcExp+n]))
		n = -1;
		do {
			strNew = str[srcExp+n] + strNew;
			n--;
		} while (!notNumber.includes(str[srcExp+n]))
		str = strNew;
		parseOper();
		parseIntegs();
		action();
	}
	const replacerStr = () => {
		isFirst();
		string = string.replace(str, num);
	}
	// const isBrackets = () => {
	// 	for (let i = string.length - 1; i >= 0; i--) {
	// 		let n = 0;
	// 		if (string[i] === "("){
	// 			do {
	// 				str += string[i+n];
	// 				n++;
	// 			} while (string[i+n-1] !== ")");
	// 			return str;
	// 		}
	// 	}
	// }
	const parseBrackets = (i) => {
		let n = 0;
		do {
			str = string[i+n] + str;
			n--;
		} while (string[i+n+1] !== "(");
	}
	const isBrackets = () => {
		const rightBracket = string.search(/[)]/);
		const leftBracket = string.search(/[(]/);
		if (rightBracket !== -1 && leftBracket !== -1){
			parseBrackets(rightBracket)
			return str;
		} else return false;
	}
	const structure = () => {
		const regNum = string.search(/[^0-9]/);
		while (regNum !== -1){
			if (isBrackets()){
				replacerStr();
			} else {
				str = string;
			}
		console.log(exp);
		console.log(string);
		console.log(str);
		console.log(num);
		}
	}
	structure();
	return string;
};
console.log(calc("2-5*(5+2+2)+1")); //2-5*(51+234*5678+1)
// a+b*c-d/e+(f-g*(j+k))-i*(x-z)
// 363636+484884*362662-744774/2626626+(252662-47773*(362662+466363))-277373*(3737-27272)