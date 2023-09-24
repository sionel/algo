const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r")
  .split("\n");

const n = Number(input[0]);
const study = [];
const boj = [];
for (let i = 1; i <= n; i++) {
  const line = input[i];
  if (line.includes("boj.kr/")) {
    boj.push(Number(line.replace("boj.kr/", "")));
  } else {
    study.push(line);
  }
}

study.sort((a, b) =>
  a.length === b.length ? (a > b ? 1 : -1) : a.length - b.length
);

boj.sort((a, b) => a - b);

study.length && console.log(study.join("\n"));
boj.length && console.log(boj.map((e) => "boj.kr/" + e).join("\n"));
