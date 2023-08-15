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
          break; // Heap property is satisfied
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

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n")

let cityCount = Number(input.shift())
let lineCount = Number(input.shift())
const heap = new MinHeap()
const arr = Array.from({ length: cityCount + 1 }, () => [])

for (let i = 0; i < lineCount; i++) {
  const [start, end, cost] = input[i].split(' ').map(Number)
  arr[start].push([cost, end])
}

const dijkstra = (start) => {
  const line = new Array(cityCount + 1).fill(Infinity);
  line[start] = 0
  heap.push({ cost: 0, point: start })
  while (!heap.isEmpty()) {
    const { cost, point } = heap.pop()
    if (line[point] < cost) continue
    for (let [aCost, aPoint] of arr[point]) {
      const total = aCost + cost
      if (total < line[aPoint]) {
        line[aPoint] = total
        heap.push({ cost: total, point: aPoint })
      }
    }
  }
  return line
}

const [start, end] = input[lineCount].split(' ').map(Number)
const result = dijkstra(start)
console.log(result[end]);