const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r")
  .split("\n");

const arr = input[1].split(" ").map(Number);
const Y = 30;
const YCost = 10;
const M = 60;
const MCost = 15;

let Yresult = 0;
let Mresult = 0;
arr.forEach((e) => {
  Yresult += Math.ceil((e + 1) / Y) * YCost;
  Mresult += Math.ceil((e + 1) / M) * MCost;
});
if (Yresult === Mresult) {
  console.log("Y M", Mresult);
} else if (Yresult > Mresult) {
  console.log("M", Mresult);
} else {
  console.log("Y", Yresult);
}
