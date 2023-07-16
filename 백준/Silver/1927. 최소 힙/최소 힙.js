class MinHeap {
  constructor() {
    this.heap = [null]
  }
  push(value) {
    this.heap.push(value)
    let curIdx = this.heap.length - 1
    let parIdx = curIdx >> 1
    while (curIdx > 1 && this.heap[curIdx] < this.heap[parIdx]) {
      this.swap(parIdx , curIdx)
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
  
        if (leftChildIdx < heapSize && this.heap[leftChildIdx] < this.heap[smallestIdx]) {
          smallestIdx = leftChildIdx;
        }
  
        if (rightChildIdx < heapSize && this.heap[rightChildIdx] < this.heap[smallestIdx]) {
          smallestIdx = rightChildIdx;
        }
  
        if (smallestIdx === curIdx) {
          break; // Heap property is satisfied
        }
        this.swap(curIdx , smallestIdx)
          curIdx = smallestIdx;
      }
  
      return min;
    }
  }

  isEmpty() {
    return this.heap.length === 1 ? true : false
  }
}
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = (() => {
  const stdin = fs.readFileSync(filePath).toString().trim().split("\n");
  let ln = 0;
  return () => stdin[ln++];
})();
const queries = Number(input())

const heap = new MinHeap()
const answer = [];
for (let i = 0; i < queries; i++) {
  const query = Number(input())
  if (query === 0) {
    answer.push(heap.pop())
  } else {
    heap.push(query)
  }
}
console.log(answer.join('\n'));
