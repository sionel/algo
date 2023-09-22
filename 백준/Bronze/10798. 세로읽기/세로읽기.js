const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n");

const obj = Array.from({ length: 15 }, () => []);

input.forEach((line) => {
  line.split("").forEach((e, i) => {
    obj[i].push(e);
  });
});

console.log(obj.map((e) => e.join("")).join(""));
