class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  get length() {
    return this.heap.length;
  }

  enqueue({ value, priority }) {
    const node = { value, priority };
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
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index].priority >= this.heap[parentIndex].priority) break;
      [this.heap[index], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[index],
      ];
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    const rootNode = this.heap[index];

    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.priority < rootNode.priority) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild.priority < rootNode.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      this.heap[index] = this.heap[swap];
      this.heap[swap] = rootNode;
      index = swap;
    }
  }
}

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
const visited = new Array(200001).fill(false);
visited[n] = true;
const queue = new PriorityQueue();
queue.enqueue({ value: n, priority: 0 });

while (queue.length) {
  const { value, priority } = queue.dequeue();
  visited[value] = true;
  if (value === m) {
    console.log(priority);
    return;
  }
  if (value < m && !visited[value * 2]) {
    queue.enqueue({ value: value * 2, priority });
  }

  if (value - 1 >= 0 && !visited[value - 1]) {
    queue.enqueue({ value: value - 1, priority: priority + 1 });
  }

  if (value + 1 <= m && !visited[value + 1]) {
    queue.enqueue({ value: value + 1, priority: priority + 1 });
  }
}
