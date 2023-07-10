class Deque {
  constructor(num) {
    this.deque = Array(num);
    this.frontIdx = num - 1;
    this.rearIdx = 0;
    this.length = num - 1
    this.size = 0
  }

  pushBack(item) {
    this.deque[this.rearIdx] = item;
    this.rearIdx = this.length === this.rearIdx ? 0 : this.rearIdx + 1
    this.size++
  }
  pushFront(item) {
    this.deque[this.frontIdx] = item;
    this.frontIdx = this.frontIdx ? this.frontIdx - 1 : this.length
    this.size++
  }

  popBack() {
    if (this.size === 0) {
      return -1;
    }
    this.size--
    if (this.rearIdx) {
      return this.deque[--this.rearIdx]
    } else {
      this.rearIdx = this.length
      return this.deque[this.rearIdx]
    }
  }
  popFront() {
    if (this.size === 0) {
      return -1;
    }
    this.size--
    if (this.frontIdx === this.length) {
      this.frontIdx = 0
      return this.deque[this.frontIdx]
    } else {
      return this.deque[++this.frontIdx]
    }
  }


  empty() {
    return this.size ? 0 : 1
  }

  back() {
    if (this.size) {
      return this.rearIdx ? this.deque[this.rearIdx - 1] : this.deque[this.length]
    }
    return -1
  }
  front() {
    if (this.size) {
      return this.frontIdx === this.length ? this.deque[0] : this.deque[this.frontIdx + 1]
    }
    return -1
  }

}
const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();
let number = Number(input())

const deque = new Deque(number)
let value = 0

for(let i = 0 ; i < number ; i++){
  const [query, num] = input().split(' ')
  switch (query.replace('\r', '')) {
    case 'push_front':
      deque.pushFront(Number(num))
      break;
    case 'push_back':
      deque.pushBack(Number(num))
      break;
    case 'pop_front':
      value = deque.popFront()
      console.log(value)
      break;
    case 'pop_back':
      value = deque.popBack()
      console.log(value)
      break;
    case 'size':
      value = deque.size
      console.log(value)
      break;
    case 'empty':
      value = deque.empty()
      console.log(value)
      break;
    case 'front':
      value = deque.front()
      console.log(value)
      break;
    case 'back':
      value = deque.back()
      console.log(value)
      break;
  }
}