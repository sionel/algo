const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replace("\r", "")
  .split("\n");

const [m, n] = input[0].split(" ").map(Number);

const surveys = Array.from({ length: n }, () =>
  Array.from({ length: m }, () => 0)
);

for (let i = 1; i <= n; i++) {
  const arr = input[i].split(" ").map(Number);
  arr.forEach((e, idx) => {
    surveys[i - 1][idx] = e ? e : 501;
  });
}

const prefer = Array.from({ length: m }, () => Array.from({ length: m }, () => 0))

for (let k = 0; k < n; k++) {
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      surveys[k][i] < surveys[k][j] && prefer[i][j]++
    }
  }
}

console.log(prefer.map(e=>e.join(' ')).join('\n'));

// const result = Array.from({ length: m }, () => 0)

// for (let i = 0; i < m; i++) {
//   let count = 0
//   for (let j = 0; j < m; j++) {
//     prefer[i][j] >= prefer[j][i] && count ++
//   }
//   result[i] = count
// }

// // const preference= Array.from({ length: m }, () => Array.from({ length: m }, () => 0))

// // Floyd-Warshall 알고리즘을 사용하여 최대 선호 지수를 계산
// for (let k = 0; k < m; k++) {
//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < m; j++) {
//             if (i != j && i != k && j != k) {
//               prefer[i][j] = Math.max(prefer[i][j], Math.min(prefer[i][k], prefer[k][j]));
//             }
//         }
//     }
// }

// console.log(prefer.map(e=>e.join(' ')).join('\n'));


// console.log(result.map((e,i)=>[e,i+1]).filter(e=>e[0]===max).map(e=>e[1]).join(' '));