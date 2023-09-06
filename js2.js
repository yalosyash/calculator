const calc = (exp) => {
	((exp) => {
		const arrSymbol = [0,1,2,3,4,5,6,7,8,9,'+','-','/','*']
		console.log("good");
	})(exp);
	let string = exp;
	let str = "";

	const parseInteg = () => {
		console.log(str);
	}
	const parseStr = () => {
		console.log(str)
	}
	const isBrackets = () => {
		for (let i = string.length - 1; i >= 0; i--) {
			let n = 1;
			if (string[i] === "("){
				do {
					str += string[i+n];
					n++;
				} while (string[i+n] !== ")");
				return str;
			}
		}
	}
	isBrackets()? parseStr():console.log(2)
};
console.log(calc("2-5*((5+3)*4)")); //2-5*((5+3)*4)
// a+b*c-d/e+(f-g*(j+k))-i*(x-z)
// 363636+484884*362662-744774/2626626+(252662-47773*(362662+466363))-277373*(3737-27272)