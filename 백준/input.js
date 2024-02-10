const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();

const reader = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.on("line", (line) => {
  if (count === null) count = Number(line);
  else {
    lines.push(line.split(" ").map((e) => Number(e)));
    if (--count === 0) reader.close();
  }
});
reader.on("close", () => {
  solution(lines);
  process.exit();
});
