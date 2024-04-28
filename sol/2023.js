const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input)

const eratos = (n) => {
  const arr = new Array(n).fill(true)
  arr[0] = false
  arr[1] = false
  for (let i = 2; i <= n; i++) {
    if (!arr[i]) continue
    for (let j = i * 2; j <= n; j += i) {
      arr[j] = false
    }
  }
  return arr
}


const solution = (N) => {
  const prime = eratos(10 ** N)
  for (let i = 10 ** (N - 1) * 2; i < 8 * 10 ** (N - 1); i++) {
    let j = i
    while (j > 0 && prime[j]) {
      j = parseInt(j / 10)
    }
    if (j === 0) console.log(i);
  }
}

solution(N)