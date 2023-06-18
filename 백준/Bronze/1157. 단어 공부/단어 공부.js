let str = ''
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  str = line
  reader.close()

});
reader.on('close', () => {
  solution(str.toLocaleUpperCase())
  process.exit();
});

const solution = (str) => {
  const obj = {}
  let word = ''

  for(let i = 0 ; i < str.length ; i++){
    obj[str[i]] = obj[str[i]]+1 || 1
  }
  let max = 0
  let same = false
  for (const k in obj) {
    const e = obj[k]
    if(max === e) same = true
    else if(e > max){
      max = e
      word = k
      same = false
    }
  }
  console.log(same ? '?' : word);
}