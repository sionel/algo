const fs = require("fs");
//"./input.txt , /dev/stdin"
const input = (()=>{
	const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
	let ln=0;
	return ()=>stdin[ln++];
})();

const [count , number] = input().split(' ').map(Number)
const arr = Array(number).fill(0)
arr[0] = 1

const numArr = input().split(' ').map(Number)
let remain = 0
let sum = 0
let result = 0

numArr.forEach(e=>{
  sum += e
  remain = sum % number
  result += arr[remain]++
})

console.log(result);