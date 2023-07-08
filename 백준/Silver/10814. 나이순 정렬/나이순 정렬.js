const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require("fs").readFileSync(filePath).toString().trim().split('\n')

const arr = input.slice(1).map(e => e.replace('\r','').split(' '))
arr.sort((a, b) => a[0] - b[0])
arr.forEach(e=>{
  console.log(e[0], e[1])
})