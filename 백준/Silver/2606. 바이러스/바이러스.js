const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().trim().split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();
const computer = Array(Number(input()) + 1).fill(false);
computer[1] = true;
const line = Number(input());
const node = {};
for (let i = 0; i < line; i++) {
  const [n1, n2] = input().trim().split(" ").map(Number);
  node[n1] = node[n1] || [];
  node[n1].push(n2);
  node[n2] = node[n2] || [];
  node[n2].push(n1);
}
const queue = [1];
while (queue.length) {
  const parent = queue.shift();
  const children = node[parent];
  if (children) {
    for (let i = 0; i < children.length; i++) {
      if (!computer[children[i]]) {
        computer[children[i]] = true;
        queue.push(children[i]);
      }
    }
  }

}

console.log(computer.filter((e) => e).length - 1);
