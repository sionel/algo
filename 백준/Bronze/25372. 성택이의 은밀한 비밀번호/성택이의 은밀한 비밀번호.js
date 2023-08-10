const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input.shift())
while(n--){
  const str = input.shift().replace('\r','')
  if(str.length >= 6 && str.length <= 9) console.log("yes");
  else console.log("no");
}