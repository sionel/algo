const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().replaceAll('\r',"").split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();

const [s, p] = input().split(' ').map(Number)
const dna = input()
const need = input().split(' ').map(Number)
const contain = [0,0,0,0]
const acgt = {
  A:0,
  C:1,
  G:2,
  T:3,
}
let result = 0
for(let i = 0 ; i < s ; i++){
  if(i === p-1){
    contain[acgt[dna[i]]]++
    if(!need.some((e,i)=>contain[i]<e)) result++
  }
  else if(i < p ){
    contain[acgt[dna[i]]]++
  }
  else {
    contain[acgt[dna[i]]]++
    contain[acgt[dna[i-p]]] && contain[acgt[dna[i-p]]]--
    if(!need.some((e,i)=>contain[i]<e)) result++
  }
}

console.log(result);