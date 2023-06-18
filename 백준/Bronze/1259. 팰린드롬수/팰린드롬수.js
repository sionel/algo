let arr = []
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  if(line === '0') reader.close()
  arr.push(line)
});
reader.on('close', () => {
  solution(arr)
  process.exit();
});

const solution = (arr) => {
  while(arr.length){
    const str = arr.shift()
    const length = str.length
    let flag = true
    for(let i = Math.floor(length/2) - 1 ; i >= 0 ; i--){
      if(str[i] !== str[length-1-i]){
        flag = false
        break
      }
    }
    console.log(flag ? 'yes' : 'no');
  }
}