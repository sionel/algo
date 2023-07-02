const fs = require("fs");
//"./input.txt , /dev/stdin"
let input = fs.readFileSync('/dev/stdin').toString().trim()
class Queue{
  constructor(){
    this.arr = []
    this.rear = 0
    this.front = 0
  }
  push(num){
    this.arr[this.rear++] = num
  }
  pop(){
    return this.rear ? this.arr[--this.rear] : -1
  }
  shift(){
    return this.front !== this.rear ? this.arr[this.front++] : -1
  }
}

function solution(num) {
  const queue = new Queue()
  
  for(let i = 1 ; i <= num ; i++){
    queue.push(i)
  }
  while(num-- !== 1){
    queue.shift()
    const temp = queue.shift()
    queue.push(temp)
  }
  console.log(queue.pop());
}

solution(input)
