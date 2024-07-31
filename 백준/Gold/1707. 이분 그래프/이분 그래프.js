const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .split("\n");

let N = Number(input[0]);

const cases = []
let count = 1
while (N--) {
  const temp = []
  const [V, E] = input[count].split(" ").map(Number);
  temp.push([V, E]);
  for (let j = 0; j < E; j++) {
    const [a, b] = input[count + 1].split(" ").map(Number);
    temp.push([a - 1, b - 1]);
    count++;
  }
  cases.push(temp);
  count++;
}

const result = [];

for (let i = 0; i < cases.length; i++) {
  const [V, E] = cases[i][0];
  const map = Array.from({ length: V }, () => []);
  for (let j = 1; j <= E; j++) {
    const [a, b] = cases[i][j];
    map[a].push(b);
    map[b].push(a);
  }

  const visited = Array.from({ length: V }, () => 0);
  const paint = (num, color) => {
    for(let j = 0 ; j < map[num].length; j++){
        if(visited[map[num][j]] === 0){
            visited[map[num][j]] = !color;
            paint(map[num][j], !color);
        } else if(visited[map[num][j]] === color){
            throw false;
        }
    }
  };
  try {
  for(let i = 0 ; i < V; i++){
      if(visited[i] === 0){
          visited[i] = true;
          paint(i, true);
      }
    }
    result.push("YES");
  } catch {
    result.push("NO");
  }
}
console.log(result.join("\n"));
