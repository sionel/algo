const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);
let c = Number(input[2]);

for (let i = 0; i < arr.length; i++) {
	let j = arr.length;
	while (true) {
		if (i === arr.indexOf(Math.max(...arr.slice(i, j)))) {
			break;
		} else {
			if (arr.indexOf(Math.max(...arr.slice(i, j))) - i <= c) {
				let maxIdx = arr.indexOf(Math.max(...arr.slice(i, j)));
				c -= maxIdx - i;
				for (let k = maxIdx - 1; k >= i; k--) {
					[arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
				}
			} else {
				j--;
			}
		}
	}
}

console.log(arr.join(" "));