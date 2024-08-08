
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const arr = [];
for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    arr.push([b, a]);
}
arr.sort((x, y) => y[0] - x[0]);
let ans = arr[0][0] - arr[0][1];
for (let i = 1; i < n; i++) {
    if (ans > arr[i][0]) {
        ans = arr[i][0] - arr[i][1];
    } else {
        ans -= arr[i][1];
    }
}
console.log(ans >= 0 ? ans : -1);