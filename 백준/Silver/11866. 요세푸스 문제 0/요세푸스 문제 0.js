class Queue {
  constructor(arr = []) {
    this.queue = [...arr];
    this.front = 0; // 큐의 맨 앞 인덱스
    this.rear = arr.length - 1; // 큐의 맨 뒤 인덱스
  }

  enqueue(item) {
    this.rear++; // 맨 뒤 인덱스 증가
    this.queue[this.rear] = item; // 맨 뒤에 요소 추가
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.queue[this.front]; // 맨 앞 요소 추출
    this.front++; // 맨 앞 인덱스 증가
    return item;
  }

  isEmpty() {
    return this.front > this.rear;
  }

  size() {
    return this.rear - this.front + 1;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[this.front];
  }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require("fs").readFileSync(filePath).toString().trim().split(' ').map(Number)
const [n, k] = [...input];

const arr = Array.from({ length: n }, (_, i) => i + 1)
const queue = new Queue(arr)
let result = '<'
while(queue.size() !== 1){
  for(let i = 0 ; i < k-1 ; i++){
    queue.enqueue(queue.dequeue())
  }
  result += queue.dequeue() + ", "
}
result += queue.dequeue() + ">"
console.log(result);