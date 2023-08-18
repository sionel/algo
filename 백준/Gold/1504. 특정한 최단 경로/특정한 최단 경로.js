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

let [point, line] = input.shift().split(' ').map(Number)

const heap = new MinHeap()
const arr = Array.from({ length: point + 1 }, () => [])

for (let i = 0; i < line; i++) {
  const [start, end, cost] = input[i].split(' ').map(Number)
  arr[start].push([cost, end])
  arr[end].push([cost, start])
}

const dijkstra = (start) => {
  const line = new Array(point + 1).fill(Infinity);
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

const [n1, n2] = input[line].split(' ').map(Number)
const ds = dijkstra(1)
const d1 = dijkstra(n1)
const d2 = dijkstra(n2)
const min = Math.min(ds[n1] + d1[n2] + d2[point], ds[n2] + d2[n1] + d1[point])
if (min === Infinity) {
  console.log(-1);
} else {
  console.log(min);
}