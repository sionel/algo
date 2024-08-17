const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const alphabet = Array.from({ length: 10 }, () => [true, 0n]);
for (let i = 1; i < n + 1; i++) {
  const arr = input[i]
    .split("")
    .map((e) => e.charCodeAt(0) - 65)
    .reverse();

  alphabet[arr[arr.length - 1]][0] = false;
  arr.forEach((e, i) => {
    alphabet[e][1] += BigInt(Math.pow(10, i));
  });
}
alphabet.sort((a, b) => {
  return a[1] > b[1] ? 1 : -1;
});
const numbers = Array(10).fill(true);
let answer = 0n;

alphabet.forEach((e) => {
  for(let j = 0; j < 10; j++) {
    if(!numbers[j]) continue
    if(j === 0 && !e[0]) continue
    numbers[j] = false
    answer += BigInt(j) * e[1]
    break
  }
})

console.log(answer+"");
