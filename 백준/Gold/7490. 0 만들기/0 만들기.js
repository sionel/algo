const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input.shift());
const result = [];
let index = 0;

const dfs = (n, str) => {
  if (n === 1) {
    str = "1" + str;
    const newStr = str.replace(/ /g, "");
    if (eval(newStr) === 0) {
      result[index].push(str);
    }
    return;
  } else {
    dfs(n - 1, " " + n + str);
    dfs(n - 1, "-" + n + str);
    dfs(n - 1, "+" + n + str);
  }
};
while (index !== n) {
  const number = Number(input.shift());
  result.push([]);
  dfs(number, "");
  result[index].sort((a, b) => (a > b ? 1 : -1));
  index++;
}


console.log(result.map(e=>e.join('\n')).join("\n\n"));
