class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  get length() {
    return this.heap.length;
  }

  enqueue({ value, priority1, priority2 }) {
    const node = { value, priority1, priority2 };
    this.heap.push(node);
    this.bubbleUp();
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const rootNode = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return rootNode;
  }

  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      // const parentIndex = Math.floor((index - 1) / 2);
      // if (this.heap[index].priority >= this.heap[parentIndex].priority) break;
      // [this.heap[index], this.heap[parentIndex]] = [
      //   this.heap[parentIndex],
      //   this.heap[index],
      // ];
      // index = parentIndex;

      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      const node = this.heap[index];
      if (parent.priority1 < node.priority1) break;
      if (
        parent.priority1 === node.priority1 &&
        parent.priority2 < node.priority2
      )
        break;
      this.heap[parentIndex] = node;
      this.heap[index] = parent;
      index = parentIndex;
    }
  }

  heapifyDown() {
    // let index = 0;
    // const length = this.heap.length;
    // const rootNode = this.heap[index];

    // while (true) {
    //   let leftChildIndex = 2 * index + 1;
    //   let rightChildIndex = 2 * index + 2;
    //   let leftChild, rightChild;
    //   let swap = null;

    //   if (leftChildIndex < length) {
    //     leftChild = this.heap[leftChildIndex];
    //     if (leftChild.priority < rootNode.priority) {
    //       swap = leftChildIndex;
    //     }
    //   }

    //   if (rightChildIndex < length) {
    //     rightChild = this.heap[rightChildIndex];
    //     if (
    //       (swap === null && rightChild.priority < rootNode.priority) ||
    //       (swap !== null && rightChild.priority < leftChild.priority)
    //     ) {
    //       swap = rightChildIndex;
    //     }
    //   }

    //   if (swap === null) break;

    //   this.heap[index] = this.heap[swap];
    //   this.heap[swap] = rootNode;
    //   index = swap;
    // }
    let index = 0;
    while (index * 2 + 1 < this.heap.length) {
      const leftChildIndex = index * 2 + 1;
      const rightChildIndex = index * 2 + 2;
      const leftChild = this.heap[leftChildIndex];
      const rightChild = this.heap[rightChildIndex];
      const parent = this.heap[index];
      if (
        rightChild !== undefined &&
        rightChild.priority1 < leftChild.priority1
      ) {
        if (parent.priority1 < rightChild.priority1) break;
        if (
          parent.priority1 === rightChild.priority1 &&
          parent.priority2 < rightChild.priority2
        )
          break;
        this.heap[index] = rightChild;
        this.heap[rightChildIndex] = parent;
        index = rightChildIndex;
      } else {
        if (parent.priority1 < leftChild.priority1) break;
        if (
          parent.priority1 === leftChild.priority1 &&
          parent.priority2 < leftChild.priority2
        )
          break;
        this.heap[index] = leftChild;
        this.heap[leftChildIndex] = parent;
        index = leftChildIndex;
      }
    }
  }
}
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const map = [];
for (let i = 1; i <= m; i++) {
  map.push(input[i].split("").map(Number));
}
const heap = new PriorityQueue();
// priority = f(n) , priority2 = g(n)
heap.enqueue({ value: [0, 0], priority1: 0, priority2: 0 });
map[0][0] = 2;
while (heap.length) {
  const { value, priority1, priority2 } = heap.dequeue();
  const [x, y] = value;
  if (x === m - 1 && y === n - 1) {
    console.log(priority1);
    break;
  }
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || nx >= m || ny < 0 || ny >= n || map[nx][ny] === 2) continue;
    if (map[nx][ny] === 0) {
      heap.enqueue({
        value: [nx, ny],
        priority1: priority1,
        priority2: priority2,
      });
    }
    if (map[nx][ny] === 1) {
      heap.enqueue({
        value: [nx, ny],
        priority1: priority1 + 1,
        priority2: priority2 + 1,
      });
    }
    map[nx][ny] = 2;
  }
}
