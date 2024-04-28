const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replace("\r", "")
  .split("\n");

const [m, n] = input[0].split(" ").map(Number);

const surveys = [];

for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);
  surveys.push(arr.map((e) => (e ? e : 100001)));
}

const prefer = Array.from({ length: m }, () =>
  Array.from({ length: m }, () => 0)
);

for (let k = 0; k < n; k++) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      surveys[k][i] < surveys[k][j] && prefer[i][j]++;
    }
  }
}
// console.log(prefer.map((e) => e.join(" ")).join("\n"));
// console.log("@@@@");
// let rank = Array(m).fill(0);

// for (let i = 0; i < m; i++) {
//   for (let j = 0; j < m; j++) {
//     prefer[i][j] >= prefer[j][i] && rank[i]++;
//   }
// }
// console.log(rank);

for (let k = 0; k < m; k++) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      if (i === j) continue;

      prefer[i][j] = Math.max(
        prefer[i][j],
        Math.min(prefer[i][k], prefer[k][j])
      );
    }
  }
}
console.log(prefer.map((e) => e.join(" ")).join("\n"));

const rank = Array(m).fill(0);

for (let i = 0; i < m; i++) {
  for (let j = 0; j < m; j++) {
    prefer[i][j] >= prefer[j][i] && rank[i]++;
  }
}
console.log(rank);
console.log(
  rank
    .map((e, i) => [e, i + 1])
    .filter((e) => e[0] === m)
    .map((e) => e[1])
    .join(" ")
);
