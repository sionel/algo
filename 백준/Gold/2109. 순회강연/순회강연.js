class MaxHeap {
  constructor() {
    this.heap = [null];
  }
  push({ compare, value }) {
    this.heap.push({ compare, value });
    let curIdx = this.heap.length - 1;
    let parIdx = curIdx >> 1;
    while (
      curIdx > 1 &&
      this.heap[curIdx].compare > this.heap[parIdx].compare
    ) {
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
      const max = this.heap.pop();

      let curIdx = 1;
      const heapSize = this.heap.length;

      while (true) {
        const leftChildIdx = curIdx * 2;
        const rightChildIdx = curIdx * 2 + 1;
        let largestIdx = curIdx;

        if (
          leftChildIdx < heapSize &&
          this.heap[leftChildIdx].compare > this.heap[largestIdx].compare
        ) {
          largestIdx = leftChildIdx;
        }

        if (
          rightChildIdx < heapSize &&
          this.heap[rightChildIdx].compare > this.heap[largestIdx].compare
        ) {
          largestIdx = rightChildIdx;
        }

        if (largestIdx === curIdx) {
          break;
        }
        this.swap(curIdx, largestIdx);
        curIdx = largestIdx;
      }

      return max;
    }
  }

  isEmpty() {
    return this.heap.length === 1 ? true : false;
  }
}
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const n = Number(input[0]);
const maxHeap = new MaxHeap();
const durateList = new Set();
const durateMap = {};
for (let i = 1; i <= n; i++) {
  const [pay, durate] = input[i].split(" ").map(Number);
  durateList.add(durate);
  durateMap[durate] = durateMap[durate] || [];
  durateMap[durate].push(pay);
}
const sortedDurateList = Array.from(durateList).sort((a, b) => b - a);
let total = 0;
let day = 0;
for (let i = 0; i < sortedDurateList.length; i++) {
  day = sortedDurateList[i];
  durateMap[day].forEach((pay) => {
    maxHeap.push({ compare: pay, value: pay });
  });

  while (day-- && !maxHeap.isEmpty()) {
    total += maxHeap.pop().value;
    if (i !== sortedDurateList.length - 1 && day === sortedDurateList[i + 1])
      break;
  }
}

console.log(total);
