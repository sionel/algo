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
      ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w']
    ],
    [
      ['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r'],
    ],
    [
      ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
    ],
    [
      ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']
    ],
    [
      ['g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g']
    ],
    [
      ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
    ]
  ]

for (let i = 0; i < num; i++) {
  const cases = Number(input())
  const queries = input().replace('\r', '').split(' ')
  for (let j = 0; j < cases; j++) {
    const query = queries[j]
    switch (query) {
      case 'U+':
        [
                         cube[3][2][6], cube[3][2][7], cube[3][2][8],
          cube[4][0][2], cube[0][0][0], cube[0][0][1], cube[0][0][2], cube[5][0][0],
          cube[4][1][5], cube[0][1][3],                cube[0][1][5], cube[5][1][3],
          cube[4][2][8], cube[0][2][6], cube[0][2][7], cube[0][2][8], cube[5][2][6],
                         cube[1][0][0], cube[1][0][1], cube[1][0][2],
        ] =
          [
                           cube[4][0][2], cube[4][1][5], cube[4][0][2],
            cube[1][0][0], cube[0][0][6], cube[0][0][3], cube[0][0][0], cube[3][2][6],
            cube[1][0][1], cube[0][0][7],                cube[0][0][1], cube[3][2][7],
            cube[1][0][2], cube[0][0][8], cube[0][0][5], cube[0][0][2], cube[3][2][8],
                           cube[5][2][6], cube[5][1][3], cube[5][0][0],
          ]
        break;
      case 'D+':
        [
                         cube[1][2][6], cube[1][2][7], cube[1][2][8],
          cube[4][2][6], cube[2][0][0], cube[2][0][1], cube[2][0][2], cube[5][0][2],
          cube[4][1][3], cube[2][1][3],                cube[2][1][5], cube[5][1][5],
          cube[4][0][0], cube[2][2][6], cube[2][2][7], cube[2][2][8], cube[5][2][8],
                         cube[3][0][0], cube[3][0][1], cube[3][0][2],
        ] =
          [
                           cube[4][0][0], cube[4][1][3], cube[4][2][6],
            cube[3][0][0], cube[0][0][6], cube[0][0][3], cube[0][0][0], cube[1][2][6],
            cube[3][0][1], cube[0][0][7],                cube[0][0][1], cube[1][2][7],
            cube[3][0][2], cube[0][0][8], cube[0][0][5], cube[0][0][2], cube[1][2][8],
                           cube[5][0][2], cube[5][0][5], cube[5][2][8],
          ]
        break;
      case 'F+':
        [
                         cube[3][2][6], cube[3][2][7], cube[3][2][8],
          cube[4][0][2], cube[1][0][0], cube[1][0][1], cube[1][0][2], cube[5][0][0],
          cube[4][1][5], cube[1][1][3],                cube[1][1][5], cube[5][1][3],
          cube[4][2][8], cube[1][2][6], cube[1][2][7], cube[1][2][8], cube[5][2][6],
                         cube[1][0][0], cube[1][0][1], cube[1][0][2],
        ] =
          [
                           cube[4][0][2], cube[4][1][5], cube[4][0][2],
            cube[1][0][0], cube[1][0][6], cube[1][0][3], cube[1][0][0], cube[3][2][6],
            cube[1][0][1], cube[1][0][7],                cube[1][0][1], cube[3][2][7],
            cube[1][0][2], cube[1][0][8], cube[1][0][5], cube[1][0][2], cube[3][2][8],
                           cube[5][2][6], cube[5][1][3], cube[5][0][0],
          ]
        break;
      case 'B+':
        break;
      case 'L+':
        break;
      case 'R+':
        break;
      case 'U-':
        [
                         cube[3][2][6], cube[3][2][7], cube[3][2][8],
          cube[4][0][2], cube[0][0][0], cube[0][0][1], cube[0][0][2], cube[5][0][0],
          cube[4][1][5], cube[0][1][3],                cube[0][1][5], cube[5][1][3],
          cube[4][2][8], cube[0][2][6], cube[0][2][7], cube[0][2][8], cube[5][2][6],
                         cube[1][0][0], cube[1][0][1], cube[1][0][2],
        ] =
          [
                           cube[5][0][0], cube[5][1][3], cube[5][2][6],
            cube[3][2][8], cube[0][0][2], cube[0][1][5], cube[0][2][8], cube[1][0][2],
            cube[3][2][7], cube[0][0][1],                cube[0][2][7], cube[1][0][1],
            cube[3][2][6], cube[0][0][0], cube[0][1][3], cube[0][2][6], cube[1][0][0],
                           cube[4][0][2], cube[4][1][5], cube[4][2][8],
          ]
        break;
      case 'D-':
        [
                         cube[1][2][6], cube[1][2][7], cube[1][2][8],
          cube[4][2][6], cube[2][0][0], cube[2][0][1], cube[2][0][2], cube[5][0][2],
          cube[4][1][3], cube[2][1][3],                cube[2][1][5], cube[5][1][5],
          cube[4][0][0], cube[2][2][6], cube[2][2][7], cube[2][2][8], cube[5][2][8],
                         cube[3][0][0], cube[3][0][1], cube[3][0][2],
        ] =
          [
                           cube[5][0][2], cube[5][1][5], cube[5][2][8],
            cube[1][2][8], cube[0][0][6], cube[0][0][3], cube[0][0][0], cube[3][0][2],
            cube[1][2][7], cube[0][0][7],                cube[0][0][1], cube[3][0][1],
            cube[1][2][6], cube[0][0][8], cube[0][0][5], cube[0][0][2], cube[3][0][0],
                           cube[4][2][6], cube[4][1][3], cube[4][0][0],
          ]
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