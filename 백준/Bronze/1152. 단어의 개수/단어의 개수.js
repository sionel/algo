let arr = []
const reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  arr = line.split(" ")
  reader.close()

});
reader.on('close', () => {
  solution(arr)
  process.exit();
});

const solution = (arr) => {
  const newArr = arr.filter(e=>e)
  console.log(newArr.length);
}