const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const inputs = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");

const [n, m] = inputs[0].split(" ").map(Number);
const earth = inputs[1].split(" ").map(Number);

const startList = {};
const endList = {};
for (let i = 2; i < 2 + m; i++) {
  const [start, end, height] = inputs[i].split(" ").map(Number);
  startList[start - 1] = startList[start - 1]
    ? startList[start - 1] + height
    : height;
  endList[end - 1] = endList[end - 1] ? endList[end - 1] + height : height;
}

let sum = 0;
for (let i = 0; i < n; i++) {
  if (startList[i]) {
    sum += startList[i];
  }
  earth[i] += sum;
  if (endList[i]) {
    sum -= endList[i];
  }
}
console.log(earth.join(" "));
