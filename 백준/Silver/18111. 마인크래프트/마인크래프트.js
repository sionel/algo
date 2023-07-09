const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require("fs").readFileSync(filePath).toString().trim().split('\n')

let [N, M, B] = input.shift().split(' ').map(Number)
let max = 0

const levels = input.reduce((obj, cur) => {
  cur.split(' ').forEach(e => {
    const n = Number(e)
    max = Math.max(max, n)
    obj[n] = obj[n] || 0
    obj[n]++
  })
  return obj
}, {})
const land = N * M
let time = 0
let result = Infinity
while (true) {
  let needBlock = max * land

  for (const k in levels) {
    const e = levels[k];
    needBlock -= Number(k) * e
  }
  if (B >= needBlock) {
    if (time + needBlock < result) {
      result = time + needBlock
    } else break
  }




  time += levels[max] * 2
  B += levels[max]
  levels[max - 1] = levels[max] + (levels[max - 1] || 0)
  delete levels[max]
  max--
  if (max < 0) break
}

console.log(result, max + 1);