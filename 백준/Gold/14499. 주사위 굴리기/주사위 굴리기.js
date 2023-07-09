const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require("fs").readFileSync(filePath).toString().trim().split('\n')

class Dice {
  constructor(num) {
    this.top = 0
    this.up = 0
    this.down = 0
    this.floor = num
    this.left = 0
    this.right = 0
  }
  moveRight(num) {
    [this.top, this.floor, this.left, this.right]
      = [this.left, this.right, this.floor, this.top]
    if (num === 0) num = this.floor
    else {
      this.floor = num
      num = 0
    }
    return [this.top, num]
  }
  moveLeft(num) {
    [this.top, this.floor, this.left, this.right]
      = [this.right, this.left, this.top, this.floor]
    if (num === 0) num = this.floor
    else {
      this.floor = num
      num = 0
    }
    return [this.top, num]
  }
  moveUp(num) {
    [this.top, this.floor, this.up, this.down]
      = [this.down, this.up, this.top, this.floor]
    if (num === 0) num = this.floor
    else {
      this.floor = num
      num = 0
    }
    return [this.top, num]
  }
  moveDown(num) {
    [this.top, this.floor, this.up, this.down]
      = [this.up, this.down, this.floor, this.top]
    if (num === 0) num = this.floor
    else {
      this.floor = num
      num = 0
    }
    return [this.top, num]
  }
}

let [N, M, x, y, lineCount] = input.shift().split(' ').map(Number)
let count = N
const board = []

while (count--) {
  board.push(input.shift().split(' ').map(Number))
}
const dice = new Dice(board[x][y])

const queries = input.shift().split(' ').map(Number)
const isMap = (x, y) => {
  return x >= 0 && y >= 0 && x <= N - 1 && y <= M - 1
}
let index = 0
let top = 0
while (lineCount--) {
  const query = queries[index++]
  switch (query) {
    case 1:
      if (isMap(x, y + 1)) {
        y++
        [top, board[x][y]] = dice.moveRight(board[x][y])
        console.log(top)
      }
      break;
    case 2:
      if (isMap(x, y - 1)) {
        y--
        [top, board[x][y]] = dice.moveLeft(board[x][y])
        console.log(top)
      }
      break;
    case 3:
      if (isMap(x - 1, y)) {
        x--
        [top, board[x][y]] = dice.moveUp(board[x][y])
        console.log(top)
      }
      break;
    case 4:
      if (isMap(x + 1, y)) {
        x++
        [top, board[x][y]] = dice.moveDown(board[x][y])
        console.log(top)
      }
      break;
  }
}