const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

let [c, m] = input[0].split(" ").map(Number);
const cityByCost = {};
const dp = Array(2001).fill(Infinity);
for (let i = 1; i <= m; i++) {
  const [city, cost] = input[i].split(" ").map(Number);
  dp[cost] = Math.min(dp[cost], city);

  if (cityByCost[cost]) {
    cityByCost[cost] = Math.min(cityByCost[cost], city);
  } else {
    cityByCost[cost] = city;
  }
}

for (let i = 1; i <= 2001; i++) {
  if (dp[i] !== Infinity) {
    for (const cost in cityByCost) {
      const city = Number(cityByCost[cost]);
      dp[i + Number(cost)] = Math.min(dp[i + Number(cost)], dp[i] + city);
    }
  }
}

let min = Infinity;
for (let i = 2001; i >= 1; i--) {
  if (min > dp[i]) {
    min = dp[i];
  } else {
    dp[i] = min;
  }
}

console.log(dp[c]);
