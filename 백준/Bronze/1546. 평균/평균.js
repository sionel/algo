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

class MinHeap {
  constructor() {
    this.heap = [null]
  }
  push({ cost, point }) {
    this.heap.push({ cost, point })
    let curIdx = this.heap.length - 1
    let parIdx = curIdx >> 1
    while (curIdx > 1 && this.heap[curIdx].cost < this.heap[parIdx].cost) {
      this.swap(parIdx, curIdx)
      curIdx = parIdx
      parIdx = curIdx >> 1
    }
  }
  swap(a, b) {
    let temp = this.heap[a]
    this.heap[a] = this.heap[b]
    this.heap[b] = temp
  }
  pop() {
    if (this.isEmpty()) {
      return 0;
    } else {
      [this.heap[1], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[1]];
      const min = this.heap.pop();

      let curIdx = 1;
      const heapSize = this.heap.length;

      while (true) {
        const leftChildIdx = curIdx * 2;
        const rightChildIdx = curIdx * 2 + 1;
        let smallestIdx = curIdx;

        if (leftChildIdx < heapSize && this.heap[leftChildIdx].cost < this.heap[smallestIdx].cost) {
          smallestIdx = leftChildIdx;
        }

        if (rightChildIdx < heapSize && this.heap[rightChildIdx].cost < this.heap[smallestIdx].cost) {
          smallestIdx = rightChildIdx;
        }

        if (smallestIdx === curIdx) {
          break; 
        }
        this.swap(curIdx, smallestIdx)
        curIdx = smallestIdx;
      }

      return min;
    }
  }

  isEmpty() {
    return this.heap.length === 1 ? true : false
  }
}

const n = Number(input())
const arr = input().split(" ").map(Number)
const max = Math.max(...arr)
const sum = arr.reduce((acc, cur) => acc + cur, 0)

console.log(sum/max*100/n);
