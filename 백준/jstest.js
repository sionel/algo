const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [number, arr] = input
let r = 31n
let M = 1234567891n

let result = 0n
let pow = 1n

for (let i = 0; i < arr.length; i++) {
  result += BigInt(arr[i].charCodeAt(0) - 96) * pow;
  pow *= r;
}

if(result >= M) result %= M;
console.log(Number(result));
//https://vscode.dev/profile/github/7ac0659b4dc22231adeaba18649b16cc
