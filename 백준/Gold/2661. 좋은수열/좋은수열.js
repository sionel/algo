const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let str = "";

const check = (str, num) => {
  str += num;
  for (let i = 1; i <= Math.floor(str.length / 2); i++) {
    if (str.substr(-i, str.length) === str.substr(-i * 2, i)) {
      return;
    }
  }
  if (str.length === n) {
    console.log(str);
    process.exit();
  }
  check(str, "1");
  check(str, "2");
  check(str, "3");
};

check(str, "1");
