const calc = (exp) => {
	(() => {
		const regSymbol = /[^1-9()+-\/*]/g;
		const check = exp.search(regSymbol)
		if (check !== -1) throw new Error("В строке фигня");
	})();

	let string = exp;
	let str = "";
	let num;
	let operator = ["*","/","+","-"];

	const parseInteg = () => {
		console.log(str);
		// str = 
	}
	const isFirst = () => {
		const srcExp = str.search(/[*/]/);
		let strNew = "";
		let n = 1;
		const notNumber = ["*","/","+","-","(",")"];
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
		}
		const replacerStr = () => {
			parseInteg();
			string = string.replace(str, num);
		}
		const isBrackets = () => {
			for (let i = string.length - 1; i >= 0; i--) {
				let n = 0;
				if (string[i] === "("){
					do {
						str += string[i+n];
						n++;
					} while (string[i+n-1] !== ")");
					return str;
				}
			}
		}
		!isBrackets() ? replacerStr() : isFirst()
		console.log(exp)
		console.log(string)
		console.log(str)
		return num;
	};
	console.log(calc("2-5*(51+234*5678)+1")); //2-5*(51+234*5678+1)
	// a+b*c-d/e+(f-g*(j+k))-i*(x-z)
	// 363636+484884*362662-744774/2626626+(252662-47773*(362662+466363))-277373*(3737-27272)