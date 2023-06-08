process.stdin.resume();
process.stdin.setEncoding('utf8');

let data = [];
let row = 0
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  if(!row){
    row = line.split(' ')[0]
  }else {
    row--
    data.push(line.split(' ').map(e=>Number(e)))
    if(!row) reader.close();
  }
});
reader.on('close', () => {
  console.log(solution(data));
  
  process.exit();
});


const solution = (arr) => {
  const dir = [[0,1],[0,-1],[1,0],[-1,0]]
  const isIce = ([x,y]) => {
    return x>=0 && x <arr.length && y >= 0 && y < arr[0].length && arr[x][y]
  }  
  let time = 0
  while(true){
    const visit = Array.from({length: arr.length},()=>Array(arr[0].length).fill(true))
    let flag = false
    const newArr = Array.from({length: arr.length},()=>Array(arr[0].length).fill(0))
    for(let i = 0 ; i < arr.length ; i++){
      for(let j = 0 ; j <arr[0].length ; j++){
        if(isIce([i,j]) && visit[i][j]){
          if(flag) return time
          flag = true
          const nodes = [[i,j]]
          while(nodes.length !== 0){
            const [x,y] = nodes.pop()
            visit[x][y] = false
            let sea = 4
            for(let d = 0; d < dir.length  ; d++){
              const [mx,my] = dir[d]
              if(isIce([x-mx, y - my])){
                sea--
                visit[x-mx][y-my] && nodes.push([x-mx, y - my])
              }
            }
            newArr[x][y] = arr[x][y] - sea > 0  ? arr[x][y] - sea : 0
          }
        }
      }
    }
    if(!flag) return 0
    time++
    arr = newArr
  }
}