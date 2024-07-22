const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const map = Array.from({ length: n }, (_, i) =>
  Array.from({ length: n }, (_, j) => (i === j ? 0 : Infinity))
);

const result = Array.from({ length: n }, (_, i) =>
  Array.from({ length: n }, (_, j) => (i === j ? "-" : 0))
);

for (let i = 1; i <= m; i++) {
  const [s, e, c] = input[i].split(" ").map(Number);
  const now = map[s - 1][e - 1]
  if(now !== Infinity && now < c) continue;
  map[s - 1][e - 1] = c;
  map[e - 1][s - 1] = c;
  result[s - 1][e - 1] = e;
  result[e - 1][s - 1] = s;
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] > map[i][k] + map[k][j]) {
        if(i === 5 && j === 0) debugger
        map[i][j] = map[i][k] + map[k][j];
        result[i][j] = result[i][k];
      }
    }
  }
}


console.log(result.map((v) => v.join(" ")).join("\n"));
