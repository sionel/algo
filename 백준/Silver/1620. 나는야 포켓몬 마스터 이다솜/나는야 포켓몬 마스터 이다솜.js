const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();
const [N, M] = input().split(" ").map(Number);

const encyclopediaObj = {};
const encyclopediaArr = [0];
for (let i = 0; i < N; i++) {
  const pokemon = input();
  encyclopediaObj[pokemon] = i + 1;
  encyclopediaArr.push(pokemon);
}
for (let i = 0; i < M; i++) {
  const query = input();

  if (isNaN(Number(query))) {
    console.log(encyclopediaObj[query]);
  } else {
    console.log(encyclopediaArr[Number(query)]);
  }
}
