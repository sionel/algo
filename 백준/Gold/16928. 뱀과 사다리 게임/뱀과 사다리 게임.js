const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();

let [R, S] = input().split(' ').map(Number)
const map =Array.from({length:101},(e,i)=>i)
for (let i = 0; i < R + S; i++) {
  let [start, end] = input().split(' ').map(Number)
  map[start] = end
}
const visit = Array.from({ length: 101 }, () => false)
visit[0] = true
visit[1] = true
const queue = [[1, 0]]
let index = 0
while (true) {
  const [position, cost] = queue[index++]
  if (position === 100) {
    console.log(cost);
    break
  }
  for (let i = 1; i <= 6; i++) {
    if (visit[position + i]) continue
    queue.push([map[position + i], cost + 1])
    visit[position + i] = true
  }
}