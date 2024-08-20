const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const students = Array.from({ length: n + 1 }, (_, i) =>
  Array.from({ length: n + 1 }, (_, j) => (i === j ? 0 : Infinity))
);

const result = Array.from({ length: n + 1 }, () =>
  Array.from({ length: n + 1 }, () => false)
);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  students[a][b] = 1;
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      students[i][j] = Math.min(
        students[i][j],
        students[i][k] + students[k][j]
      );
    }
  }
}

let count = 0;
for (let i = 1; i <= n; i++) {
  try {
    for (let j = 1; j <= n; j++) {
      if (students[i][j] === Infinity && students[j][i] === Infinity) throw "break";
    }  
    count++
  } catch {
    continue;
  }
}

console.log(count);
