const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const place = input[1].split(" ").map(Number);
const costs = input.slice(2).map((e) => e.split(" ").map(Number));

const prefixSum = Array(N + 1).fill(0);

for (let i = 0; i < M - 1; i++) {
  let from;
  let to;

  if (place[i] > place[i + 1]) {
    from = place[i + 1];
    to = place[i];
  } else {
    from = place[i];
    to = place[i + 1];
  }

  prefixSum[from] += 1;
  prefixSum[to] -= 1;
}

for (let i = 1; i < N + 1; i++) {
  prefixSum[i] += prefixSum[i - 1];
}

let answer = 0;

costs.forEach((cost, index) => {
  const ticket = cost[0] * prefixSum[index + 1];
  const IC = cost[1] * prefixSum[index + 1] + cost[2];

  answer += Math.min(ticket, IC);
});

console.log(answer);
