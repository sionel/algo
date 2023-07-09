const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require("fs").readFileSync(filePath).toString().trim().split('\n')

const arr = input.slice(1).sort((a,b)=>a-b).join('\n')
console.log(arr);