const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();

const num = Number(input())
const cube =
  [
    [
      ['w', 'w', 'w'],
      ['w', 'w', 'w'],
      ['w', 'w', 'w']
    ],
    [
      ['r', 'r', 'r'],
      ['r', 'r', 'r'],
      ['r', 'r', 'r']
    ],
    [
      ['y', 'y', 'y'],
      ['y', 'y', 'y'],
      ['y', 'y', 'y']
    ],
    [
      ['o', 'o', 'o'],
      ['o', 'o', 'o'],
      ['o', 'o', 'o']
    ],
    [
      ['g', 'g', 'g'],
      ['g', 'g', 'g'],
      ['g', 'g', 'g']
    ],
    [
      ['b', 'b', 'b'],
      ['b', 'b', 'b'],
      ['b', 'b', 'b']
    ]
  ]

for (let i = 0; i < num; i++) {
  const cases = Number(input())
  const queries = input().replace('\r', '').split(' ')
  for (let j = 0; j < cases; j++) {
    const query = queries[j]
    switch (query) {
      case 'U+':
        break;
      case 'D+':
        break;
      case 'F+':
        break;
      case 'B+':
        break;
      case 'L+':
        break;
      case 'R+':
        break;
      case 'U-':
        break;
      case 'D-':
        break;
      case 'F-':
        break;
      case 'B-':
        break;
      case 'L-':
        break;
      case 'R-':
        break;
    }
  }
}