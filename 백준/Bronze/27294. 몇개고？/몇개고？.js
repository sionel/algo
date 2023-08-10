const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(' ').map(Number)

if(n>= 12 && n <= 16){
  console.log(m ? 280 : 320);
}else {
  console.log(280);
}