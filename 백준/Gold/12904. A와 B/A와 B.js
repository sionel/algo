const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs
    .readFileSync(filePath)
    .toString()
    .replaceAll("\r", "")
    .split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();

const s = input()
const t = input()

const queue = [t]
const set = new Set([t])
let idx = 0

while (true) {
  const cur = queue[idx++]
  if(cur === s){
    console.log(1);
    break
  }
  if(cur.length < s.length){
    console.log(0);
    break
  }
  const next =cur.slice(-1) === "A" ?  cur.slice(0,-1) : [...cur.slice(0,-1)].reverse().join('')
  if(!set.has(next)){
    set.add(next)
    queue.push(next)
  }
}

