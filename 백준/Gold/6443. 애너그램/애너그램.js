const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

let n = Number(input[0]);
const answer = input.slice(1, 1 + n);

const result = [];

for (let i = 0; i < n; i++) {
  const arr = answer[i].trim().split("");
  arr.sort();
  // const visited = new Array(arr.length).fill(false);
  const visited = {};
  const stack = [];
  const resultArr = new Set();

  arr.forEach((alphabet) => {
    if (!visited[alphabet]) visited[alphabet] = 1;
    else visited[alphabet]++;
  });
  const dfs = (depth) => {
    if (depth === arr.length) {
      resultArr.add(stack.join(""));
      return;
    }
    for (const i in visited) {
      if (visited[i]) {
        // visited[i] = true;
        visited[i]--;
        stack.push(i);
        dfs(depth + 1);
        stack.pop();
        // visited[i] = false;
        visited[i]++;
      }
    }
  };
  dfs(0);
  result.push(...resultArr);
}

// while (n--) {
//   const [...arr] = input.shift().trim();
//   arr.sort();
//   const stack = [];
//   const set = new Set();
//   const useMap = new Array(arr.length).fill(false);

//   const makeWord = () => {
//     if (stack.length === arr.length) {
//       set.add(stack.join(""));
//       return;
//     }

//     for (let i = 0; i < arr.length; i++) {
//       if (!useMap[i]) {
//         useMap[i] = true;
//         stack.push(arr[i]);
//         makeWord();
//         stack.pop();
//         useMap[i] = false;
//       }
//     }
//   };

//   makeWord();
//   result.push(...set);
// }

console.log(result.join("\n"));
