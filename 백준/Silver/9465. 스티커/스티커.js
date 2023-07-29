const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();

let cases = Number(input());
while (cases--) {
  const n = Number(input());
  const arr = [];

  arr.push(input().split(" ").map(Number));
  arr.push(input().split(" ").map(Number));
  console.log(sticker(n, arr));
  // const sol = (x, y) => {
  //   if (dp[x][y] || y >= n) return dp[x][y];
  //   else {
  //     dp[x][y] =
  //       arr[x][y] + Math.max(sol(x ? 0 : 1, y + 1), sol(x ? 0 : 1, y + 2));
  //   }
  //   return dp[x][y];
  // };

  // sol(0, 0);
  // sol(1, 0);
  // console.log(Math.max(dp[0][0], dp[1][0]));
}

function sticker(n, arr) {
  let dp = [];
  for (let i = 0; i <= n; i++) {
    dp.push([0, 0]);
  }
  dp[1][0] = arr[0][0];
  dp[1][1] = arr[1][0];
  for (let i = 2; i <= n; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 2][1]) + arr[0][i - 1] * 1;
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 2][0]) + arr[1][i - 1] * 1;
  }
  return Math.max(...dp[n]);
}
