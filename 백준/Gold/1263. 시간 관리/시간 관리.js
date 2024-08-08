const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];
for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(" ").map(Number));
}
arr.sort((x, y) => y[1] - x[1]);
let ans = arr[0][1] - arr[0][0];
for (let i = 1; i < n; i++) {
    if (ans > arr[i][1]) {
        ans = arr[i][1] - arr[i][0];
    } else {
        ans -= arr[i][0];
    }
}
console.log(ans >= 0 ? ans : -1);