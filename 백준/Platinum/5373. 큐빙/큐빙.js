const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();

const num = Number(input())
const init =
  [
    [
      'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'
    ],
    [
      'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r'
    ],
    [
      'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'
    ],
    [
      'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'
    ],
    [
      'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g'
    ],
    [
      'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'
    ]
  ]
let result = []


/*
주사위 배치 
      B
    L U R
      F
      D

배열 배치
      3
    4 0 5
      1
      2

번호 배치
        ---------
	      | 0 1 2 |
        | 3 4 5 |
	      | 6 7 8 |
-------------------------
| 0 1 2 | 0 1 2 | 0 1 2 |
| 3 4 5 | 3 4 5 | 3 4 5 |
| 6 7 8 | 6 7 8 | 6 7 8 |
-------------------------
	      | 0 1 2 |
        | 3 4 5 |
	      | 6 7 8 |
        ---------
        | 0 1 2 |
        | 3 4 5 |
    	  | 6 7 8 |
        ---------

색 초기화
        ---------
	      | o o o |
        | o o o |
	      | o o o |
-------------------------
| g g g | w w w | b b b |
| g g g | w w w | b b b |
| g g g | w w w | b b b |
-------------------------
	      | r r r |
        | r r r |
	      | r r r |
        ---------
        | y y y |
        | y y y |
    	  | y y y |
        ---------

*/


for (let i = 0; i < num; i++) {
  const cases = Number(input())
  const queries = input().replace('\r', '').split(' ')
  const cube = init.map(e=>[...e])
  for (let j = 0; j < cases; j++) {
    const query = queries[j]
    switch (query) {
      case 'U+': //
        [
                      cube[3][6], cube[3][7], cube[3][8],
          cube[4][2], cube[0][0], cube[0][1], cube[0][2], cube[5][0],
          cube[4][5], cube[0][3],             cube[0][5], cube[5][3],
          cube[4][8], cube[0][6], cube[0][7], cube[0][8], cube[5][6],
                      cube[1][0], cube[1][1], cube[1][2],
        ] =
          [
                        cube[4][8], cube[4][5], cube[4][2],
            cube[1][0], cube[0][6], cube[0][3], cube[0][0], cube[3][6],
            cube[1][1], cube[0][7],             cube[0][1], cube[3][7],
            cube[1][2], cube[0][8], cube[0][5], cube[0][2], cube[3][8],
                        cube[5][6], cube[5][3], cube[5][0],
          ]
        break;
        case 'U-'://
          [
                        cube[3][6], cube[3][7], cube[3][8],
            cube[4][2], cube[0][0], cube[0][1], cube[0][2], cube[5][0],
            cube[4][5], cube[0][3],             cube[0][5], cube[5][3],
            cube[4][8], cube[0][6], cube[0][7], cube[0][8], cube[5][6],
                        cube[1][0], cube[1][1], cube[1][2],
          ] =
            [
                          cube[5][0], cube[5][3], cube[5][6],
              cube[3][8], cube[0][2], cube[0][5], cube[0][8], cube[1][2],
              cube[3][7], cube[0][1],             cube[0][7], cube[1][1],
              cube[3][6], cube[0][0], cube[0][3], cube[0][6], cube[1][0],
                          cube[4][2], cube[4][5], cube[4][8],
            ]
          break;
        case 'F+': //
          [
                        cube[0][6], cube[0][7], cube[0][8],
            cube[4][8], cube[1][0], cube[1][1], cube[1][2], cube[5][6],
            cube[4][7], cube[1][3],             cube[1][5], cube[5][7],
            cube[4][6], cube[1][6], cube[1][7], cube[1][8], cube[5][8],
                        cube[2][0], cube[2][1], cube[2][2],
          ] =
            [
                          cube[4][6], cube[4][7], cube[4][8],
              cube[2][0], cube[1][6], cube[1][3], cube[1][0], cube[0][6],
              cube[2][1], cube[1][7],             cube[1][1], cube[0][7],
              cube[2][2], cube[1][8], cube[1][5], cube[1][2], cube[0][8],
                          cube[5][8], cube[5][7], cube[5][6],
            ]
          break;
          case 'F-'://
            [
                          cube[0][6], cube[0][7], cube[0][8],
              cube[4][8], cube[1][0], cube[1][1], cube[1][2], cube[5][6],
              cube[4][7], cube[1][3],             cube[1][5], cube[5][7],
              cube[4][6], cube[1][6], cube[1][7], cube[1][8], cube[5][8],
                          cube[2][0], cube[2][1], cube[2][2],
            ] =
              [
                            cube[5][6], cube[5][7], cube[5][8],
                cube[0][8], cube[1][2], cube[1][5], cube[1][8], cube[2][2],
                cube[0][7], cube[1][1],             cube[1][7], cube[2][1],
                cube[0][6], cube[1][0], cube[1][3], cube[1][6], cube[2][0],
                            cube[4][8], cube[4][7], cube[4][6],
              ]
            break;
      case 'D+'://
        [
                      cube[1][6], cube[1][7], cube[1][8],
          cube[4][6], cube[2][0], cube[2][1], cube[2][2], cube[5][8],
          cube[4][3], cube[2][3],             cube[2][5], cube[5][5],
          cube[4][0], cube[2][6], cube[2][7], cube[2][8], cube[5][2],
                      cube[3][0], cube[3][1], cube[3][2],
        ] =
          [
                        cube[4][0], cube[4][3], cube[4][6],
            cube[3][0], cube[2][6], cube[2][3], cube[2][0], cube[1][6],
            cube[3][1], cube[2][7],             cube[2][1], cube[1][7],
            cube[3][2], cube[2][8], cube[2][5], cube[2][2], cube[1][8],
                        cube[5][2], cube[5][5], cube[5][8],
          ]
        break;
        case 'D-'://
          [
                        cube[1][6], cube[1][7], cube[1][8],
            cube[4][6], cube[2][0], cube[2][1], cube[2][2], cube[5][8],
            cube[4][3], cube[2][3],             cube[2][5], cube[5][5],
            cube[4][0], cube[2][6], cube[2][7], cube[2][8], cube[5][2],
                        cube[3][0], cube[3][1], cube[3][2],
          ] =
            [
                          cube[5][8], cube[5][5], cube[5][2],
              cube[1][8], cube[2][2], cube[2][5], cube[2][8], cube[3][2],
              cube[1][7], cube[2][1],             cube[2][7], cube[3][1],
              cube[1][6], cube[2][0], cube[2][3], cube[2][6], cube[3][0],
                          cube[4][6], cube[4][3], cube[4][0],
            ]
          break;
      case 'B+'://
        [
                      cube[2][6], cube[2][7], cube[2][8],
          cube[4][0], cube[3][0], cube[3][1], cube[3][2], cube[5][2],
          cube[4][1], cube[3][3],             cube[3][5], cube[5][1],
          cube[4][2], cube[3][6], cube[3][7], cube[3][8], cube[5][0],
                      cube[0][0], cube[0][1], cube[0][2],
        ] =
          [
                        cube[4][2], cube[4][1], cube[4][0],
            cube[0][0], cube[3][6], cube[3][3], cube[3][0], cube[2][6],
            cube[0][1], cube[3][7],             cube[3][1], cube[2][7],
            cube[0][2], cube[3][8], cube[3][5], cube[3][2], cube[2][8],
                        cube[5][0], cube[5][1], cube[5][2],
          ]
        break;
        case 'B-':
          [
                        cube[2][6], cube[2][7], cube[2][8],
            cube[4][0], cube[3][0], cube[3][1], cube[3][2], cube[5][2],
            cube[4][1], cube[3][3],             cube[3][5], cube[5][1],
            cube[4][2], cube[3][6], cube[3][7], cube[3][8], cube[5][0],
                        cube[0][0], cube[0][1], cube[0][2],
          ] =
            [
                          cube[5][2], cube[5][1], cube[5][0],
              cube[2][8], cube[3][2], cube[3][5], cube[3][8], cube[0][2],
              cube[2][7], cube[3][1],             cube[3][7], cube[0][1],
              cube[2][6], cube[3][0], cube[3][3], cube[3][6], cube[0][0],
                          cube[4][0], cube[4][1], cube[4][2],
            ]
          break;
      case 'L+':
        [
                      cube[3][0], cube[3][3], cube[3][6],
          cube[2][6], cube[4][0], cube[4][1], cube[4][2], cube[0][0],
          cube[2][3], cube[4][3],             cube[4][5], cube[0][3],
          cube[2][0], cube[4][6], cube[4][7], cube[4][8], cube[0][6],
                      cube[1][6], cube[1][3], cube[1][0],
        ] =
          [
                        cube[2][0], cube[2][3], cube[2][6],
            cube[1][6], cube[4][6], cube[4][3], cube[4][0], cube[3][0],
            cube[1][3], cube[4][7],             cube[4][1], cube[3][3],
            cube[1][0], cube[4][8], cube[4][5], cube[4][2], cube[3][6],
                        cube[0][6], cube[0][3], cube[0][0],
          ]
        break;
        case 'L-':
          [
                        cube[3][0], cube[3][3], cube[3][6],
            cube[2][6], cube[4][0], cube[4][1], cube[4][2], cube[0][0],
            cube[2][3], cube[4][3],             cube[4][5], cube[0][3],
            cube[2][0], cube[4][6], cube[4][7], cube[4][8], cube[0][6],
                        cube[1][6], cube[1][3], cube[1][0],
          ] =
            [
                          cube[0][0], cube[0][3], cube[0][6],
              cube[3][6], cube[4][2], cube[4][5], cube[4][8], cube[1][0],
              cube[3][3], cube[4][1],             cube[4][7], cube[1][3],
              cube[3][0], cube[4][0], cube[4][3], cube[4][6], cube[1][6],
                          cube[2][6], cube[2][3], cube[2][0],
            ]
          break;
      case 'R+':
        [
                      cube[3][8], cube[3][5], cube[3][2],
          cube[0][2], cube[5][0], cube[5][1], cube[5][2], cube[2][8],
          cube[0][5], cube[5][3],             cube[5][5], cube[2][5],
          cube[0][8], cube[5][6], cube[5][7], cube[5][8], cube[2][2],
                      cube[1][2], cube[1][5], cube[1][8],
        ] =
          [
                        cube[0][8], cube[0][5], cube[0][2],
            cube[1][2], cube[5][6], cube[5][3], cube[5][0], cube[3][8],
            cube[1][5], cube[5][7],             cube[5][1], cube[3][5],
            cube[1][8], cube[5][8], cube[5][5], cube[5][2], cube[3][2],
                        cube[2][2], cube[2][5], cube[2][8],
          ]
        break;
      case 'R-':
        [
                      cube[3][8], cube[3][5], cube[3][2],
          cube[0][2], cube[5][0], cube[5][1], cube[5][2], cube[2][8],
          cube[0][5], cube[5][3],             cube[5][5], cube[2][5],
          cube[0][8], cube[5][6], cube[5][7], cube[5][8], cube[2][2],
                      cube[1][2], cube[1][5], cube[1][8],
        ] =
          [
                        cube[2][8], cube[2][5], cube[2][2],
            cube[3][2], cube[5][2], cube[5][5], cube[5][8], cube[1][8],
            cube[3][5], cube[5][1],             cube[5][7], cube[1][5],
            cube[3][8], cube[5][0], cube[5][3], cube[5][6], cube[1][2],
                        cube[0][2], cube[0][5], cube[0][8],
          ]
        break;
    }
  }

  for(let i = 0 ; i < 9 ; i = i+3){
      result.push(cube[0][i]+cube[0][i+1]+cube[0][i+2])
  }
}

console.log(result.join('\n'));
