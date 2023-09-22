const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const coins = [];
let target = k;
for (let i = 1; i <= n; i++) {
  const coin = Number(input[i]);
  coin <= target && coins.push(coin);
}

let index = coins.length - 1;
let result = 0;
while (target) {
  if (target >= coins[index]) {
    target -= coins[index];
    result++;
  } else {
    index--;
  }
}

console.log(result);
