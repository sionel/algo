const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")

let count = Number(input.shift())

while (count--) {
  let cnt = 0;
  const n = Number(input.shift())
  const visited = Array(n + 1).fill(false);
  const done = Array(n + 1).fill(false);
  const arr = [0, ...input.shift().split(' ').map(Number)]

  const dfs = (node) => {
    visited[node] = true;
    const next = arr[node];

    if (!visited[next]) dfs(next);
    else if (!done[next]) {
      for (let i = next; i !== node; i = arr[i]) {
        cnt += 1;
      }

      cnt += 1;
    }

    done[node] = true;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;

    dfs(i);
  }

  console.log(n - cnt);
}