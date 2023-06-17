let NLRX = []
let A = []
let isFirst = true
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  if(isFirst){
    NLRX = line.split(' ').map(e=>Number(e))
    isFirst = !isFirst
  }
  else {
    A = line.split(' ').map(e=>Number(e))
    reader.close()
  }
});
reader.on('close', () => {
  solution(NLRX ,A)
  process.exit();
});

const solution = (NLRX , questions) => {
  const [n,l,r,x] = NLRX
  let count = 0
  const dfs = (selected, sum, remains) => {
    const [max,min] = [Math.max(...selected) , Math.min(...selected)]
    
    if(sum >= l && selected.length >= 2 && max - min >= x ){
      count++
    }
    for(let i = 0 ; i < remains.length ; i++){
      const temp = remains.slice(i+1)
      const q = remains[i]
      const newSelect = [...selected]
      newSelect.push(q)
      if(sum + q > r){
        continue
      }      
      dfs(newSelect , sum+q , temp)
    }
  }
  dfs([], 0 , questions)
  console.log(count)
}