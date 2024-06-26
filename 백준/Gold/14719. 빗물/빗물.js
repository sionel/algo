const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [h, w] = input[0].split(" ").map(Number);
const wall = input[1].split(" ").map(Number);
let max = 0;
const leftWall = [];
const rightWall = [];


for (let i = 0; i < w; i++) {
  if(max < wall[i]) {
    max = wall[i];
  }
  leftWall.push(max);
}
max = 0
for(let i = w - 1; i >= 0; i--) {
  if(max < wall[i]) {
    max = wall[i];
  }
  rightWall.push(max);
}
let result = 0
for(let i = 0; i < w; i++) {
  result += Math.min(leftWall[i], rightWall[w - i - 1]) - wall[i];
}
console.log(result)
