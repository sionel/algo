const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [r, c] = input[0].split(" ").map(Number);
const map = []

for(let i = 1 ; i <= r ; i++){
  map.push(input[i].split(""))
}
let max = 0
const bfs = (x,y) =>{
  const dirs = [[-1,0],[1,0],[0,-1],[0,1]]
  const visited = Array.from({length:r},()=>Array(c).fill(false))
  const queue = [[x,y,0]]
  visited[x][y] = true
  while(queue.length){
    const [x,y,count] = queue.shift()
    max = Math.max(max,count)
    for(const dir of dirs){
      const nx = x + dir[0]
      const ny = y + dir[1]
      if(nx < 0 || ny < 0 || nx >= r || ny >= c) continue
      if(visited[nx][ny] || map[nx][ny] === "W") continue
      visited[nx][ny] = true
      queue.push([nx,ny,count+1])
    }
  }
}

for(let i = 0 ; i < r ; i++){
  for(let j = 0 ; j < c ; j++){
    if(map[i][j] === "L"){
      bfs(i,j)
    }
  }
}

console.log(max)