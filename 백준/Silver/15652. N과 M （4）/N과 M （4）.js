const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number)

const arr = []
const dp = (n, m) => {
  if (m === M) {
    console.log(arr.join(' '));
  }
  else {
    for (let i = n; i <= N ; i++){
      arr.push(i)
      dp(i,m+1)
      arr.pop()
    }
  }
}

dp(1, 0)