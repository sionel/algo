const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .split("\n");

const N = Number(input[0])

const eratos = (n) => {
  const arr = Array(n + 1).fill(true);
  arr[0] = arr[1] = false;
  const prime = []
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      prime.push(i);
    }
  }
  return prime;
}
const prime = eratos(2000000)
const filter = prime.filter((el) => {
  const str = String(el)
  for(let i = 0 ; i <(str.length+1)/2 ; i++){
    if(str[i] !== str[str.length-1-i]){
      return false
    }
  }
  if(el< N ) return false
  return true
})

console.log(filter[0]);