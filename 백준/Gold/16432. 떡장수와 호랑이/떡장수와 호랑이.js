const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
const riceCake = Array.from({ length: n }, () => []);

for (let i = 1; i < n + 1; i++) {
  riceCake[i - 1] = input[i].split(" ").slice(1).map(Number);
}

const result = [];
const dp = Array.from({ length: n }, () => Array(10).fill(0));

const bfs = (prev , prevIndex) => {
  const day = result.length;
  if (result.length === n) {
    console.log(result.join("\n"));
    process.exit();
  }

  for (let i = 0; i < riceCake[day].length; i++) {
    if (riceCake[day][i] === prev || dp[day][i]) continue;
    result.push(riceCake[day][i]);
    bfs(riceCake[day][i], i);
    dp[day][i] = 1;
    result.pop();
  }
};

for (let i = 0; i < riceCake[0].length; i++) {
  result.push(riceCake[0][i]);
  bfs(riceCake[0][i] , i);
  dp[0][i] = 1;
  result.pop();
}
console.log(-1);
