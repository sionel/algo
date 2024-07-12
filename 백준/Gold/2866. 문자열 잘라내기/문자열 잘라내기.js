const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let strList = Array.from({ length: m }, () => "");

for (let i = 1; i <= n; i++) {
  const arr = input[i].split("");
  for (let j = 0; j < m; j++) {
    strList[j] = arr[j] + strList[j];
  }
}

let result = 0;
while (n--) {
  const set = new Set();
  for (let i = 0; i < m; i++) {
    set.add(strList[i].slice(0, -1));
  }
  if (set.size !== m) break;
  result++;
  strList = [...set]
}
console.log(result);
