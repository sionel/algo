const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const dp = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));
const map = [];

for (let i = 1; i <= n; i++) {
  map.push(input[i].split(" ").map(Number));
}

dp[0][0] = 1;

const dfs = (x, y) => {
  let value = 0;
  if (x + 1 < n && map[x][y] < map[x + 1][y]) {
    value += dp[x + 1][y] !== -1 ? dp[x + 1][y] : dfs(x + 1, y);
  }
  if (y + 1 < m && map[x][y] < map[x][y + 1]) {
    value += dp[x][y + 1] !== -1 ? dp[x][y + 1] : dfs(x, y + 1);
  }
  if (x - 1 >= 0 && map[x][y] < map[x - 1][y]) {
    value += dp[x - 1][y] !== -1 ? dp[x - 1][y] : dfs(x - 1, y);
  }
  if (y - 1 >= 0 && map[x][y] < map[x][y - 1]) {
    value += dp[x][y - 1] !== -1 ? dp[x][y - 1] : dfs(x, y - 1);
  }
  dp[x][y] = value;
  return dp[x][y];
};

console.log(dfs(n - 1, m - 1));
