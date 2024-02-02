class MinHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = curIdx >> 1;
    while (curIdx > 1 && this.heap[curIdx][1] < this.heap[parIdx][1]) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = curIdx >> 1;
    }
  }
  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }
  pop() {
    if (this.isEmpty()) {
      return 0;
    } else {
      [this.heap[1], this.heap[this.heap.length - 1]] = [
        this.heap[this.heap.length - 1],
        this.heap[1],
      ];
      const min = this.heap.pop();

      let curIdx = 1;
      const heapSize = this.heap.length;

      while (true) {
        const leftChildIdx = curIdx * 2;
        const rightChildIdx = curIdx * 2 + 1;
        let smallestIdx = curIdx;

        if (
          leftChildIdx < heapSize &&
          this.heap[leftChildIdx][1] < this.heap[smallestIdx][1]
        ) {
          smallestIdx = leftChildIdx;
        }

        if (
          rightChildIdx < heapSize &&
          this.heap[rightChildIdx][1] < this.heap[smallestIdx][1]
        ) {
          smallestIdx = rightChildIdx;
        }

        if (smallestIdx === curIdx) {
          break;
        }
        this.swap(curIdx, smallestIdx);
        curIdx = smallestIdx;
      }

      return min;
    }
  }

  isEmpty() {
    return this.heap.length === 1 ? true : false;
  }
}
class Queue {
  constructor() {
    this.arr = [];
    this.rear = 0;
    this.front = 0;
  }
  push(e) {
    this.arr[front++] = e;
  }
  pop() {
    return this.arr[rear++];
  }

  process() {
    const result = [];
    for (let i = this.rear; i < this.front; i++) {
      this.arr[i]--;
      if (this.arr[i] === 0) {
        result.push(this.pop());
      }
    }
    return result;
  }
  size() {
    return this.front - this.rear;
  }
}

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r")
  .split("\n");

const [n, t, w, r] = input[0].split(" ").map(Number);
const minHeap = new MinHeap();
input[1].split(" ").forEach((e, i) => {
  minHeap.push([i + 1, Number(e)]);
});
allotment.sort((a, b) => b[0] - a[0]);
const start = Array.from({ length: n }, () => []);
const represents = input[2].split(" ").map(Number);
const workers = new Queue();
const rest = new Queue();
for (let i = 0; i < represents.length; i++) {
  let now = represents[i];
  now -= workers.size();
  const done = workers.process();
}
