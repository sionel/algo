// process.stdin.resume();
// process.stdin.setEncoding('utf8');

// let data = [];
// const reader = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// reader.on('line', (line) => {
//   data.push(...line.split(' '));
//   reader.close();
// });
// reader.on('close', () => {
//   console.log(solution(...data));
//   process.exit();
// });

const solution = (str, num) => {
  let pivot = 0
  for(let i = 1 ; i < str.length ; i++){
    if(str[pivot] === str[i]){
      pivot++
    }else if(pivot){
      pivot = 0
      i--
    }
  }
  return str.length + (str.length - pivot) * (Number(num)-1)
}

console.log(solution("abababa", 2));
// function makeTable(pattern) {
//   const table = Array.from({ length: pattern.length }, () => 0);
//   let j = 0;
//   for (let i = 1; i < pattern.length; i++) {
//     while (j > 0 && pattern[i] !== pattern[j]) j = table[j - 1];
//     console.log(j);
//     if (pattern[i] === pattern[j]) table[i] = ++j;
//   }
//   return table;
// }

// makeTable("ababaabacb")
// console.log();