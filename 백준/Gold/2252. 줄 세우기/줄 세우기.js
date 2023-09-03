const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");


let [n, m] = input[0].split(' ').map(Number)


const arr = Array.from({ length: 32001 }, () => [0])
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number)
  arr[b].push(a)
}

const result = new Set()

const dfs = (num) => {
  while (arr[num].length !== 1) {
    const next = arr[num].pop()
    next && dfs(next)
  }
  result.add(num)
}

for (let i = 1; i <= n; i++) {
  if (arr[i].length) dfs(i)
}
console.log([...result].join(' '));