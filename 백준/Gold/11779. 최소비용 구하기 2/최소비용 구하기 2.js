class MinHeap {
  constructor() {
    this.heap = [null];
  }
  push({ cost, point }) {
    this.heap.push({ cost, point });
    let curIdx = this.heap.length - 1;
    let parIdx = curIdx >> 1;
    while (curIdx > 1 && this.heap[curIdx].cost < this.heap[parIdx].cost) {
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
          this.heap[leftChildIdx].cost < this.heap[smallestIdx].cost
        ) {
          smallestIdx = leftChildIdx;
        }

        if (
          rightChildIdx < heapSize &&
          this.heap[rightChildIdx].cost < this.heap[smallestIdx].cost
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

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .replaceAll("\r", "")
  .split("\n");

const n = Number(input[0]);
const m = Number(input[1]);
const map = Array.from({ length: n + 1 }, () => []);

for (let i = 2; i < m + 2; i++) {
  const [start, end, cost] = input[i].split(" ").map(Number);
  map[start].push([cost, end]);
}
const [start, end] = input[m + 2].split(" ").map(Number);
const heap = new MinHeap();
const dijkstra = (start) => {
  const line = new Array(n + 1).fill(Infinity);
  const stopover = Array.from({ length: n + 1 }, () => [start]);

  line[start] = 0;
  heap.push({ cost: 0, point: start });
  while (!heap.isEmpty()) {
    const { cost, point } = heap.pop();
    if (line[point] < cost) continue;
    for (let [aCost, aPoint] of map[point]) {
      const total = aCost + cost;
      if (total < line[aPoint]) {
        line[aPoint] = total;
        stopover[aPoint] = [...stopover[point], aPoint];
        heap.push({ cost: total, point: aPoint });
      }
    }
  }
  return [line, stopover];
};

const [road, stopover] = dijkstra(start);
console.log(road[end]);
console.log(stopover[end].length);
console.log(stopover[end].join(" "));
