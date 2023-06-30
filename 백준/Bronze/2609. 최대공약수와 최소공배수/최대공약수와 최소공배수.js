const fs = require("fs");
//"./input.txt , /dev/stdin"
let input = fs.readFileSync('/dev/stdin').toString();
solution(input)
function solution(str) {
  // console.log(str);
  const [n1,n2] = str.split(' ').map(e=>Number(e))
  const gdc = getGdc(n1,n2)

  console.log(gdc)
  console.log(n1/gdc*n2)

}
function getGdc(n1,n2) {
  return n1%n2 ===0 ? n2 : getGdc(n2 , n1%n2)
}