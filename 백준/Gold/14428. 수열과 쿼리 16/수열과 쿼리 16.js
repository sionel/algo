//"./input.txt , /dev/stdin"
const fs = require("fs");

const input = (() => {
  const stdin = fs.readFileSync('/dev/stdin').toString().split('\n');
  let ln = 0;
  return () => stdin[ln++];
})();

const N = Number(input());
const arr = input().split(' ').map(Number);
let count = Number(input());
const tree = Array(4 * N+1);

const minIdx = (x, y) => {
  if (x === -1) return y;
  if (y === -1) return x;
  if (arr[x] === arr[y]) return Math.min(x, y);
  else return arr[x] < arr[y] ? x : y;
};

const init = (start, end, node) => {
  if (start === end) return tree[node] = start;
  let mid = (start + end) >> 1;
  return tree[node] = minIdx(init(start, mid, node * 2), init(mid + 1, end, node * 2 + 1));
};

const findMin = (start, end, node, left, right) => {
  if (left > end || right < start) return -1;
  if (left <= start && end <= right) return tree[node];
  let mid = (start + end) >> 1;
  return minIdx(findMin(start, mid, node * 2, left, right), findMin(mid + 1, end, node * 2 + 1, left, right));
};

const update = (start, end, node, idx) => {
  if (idx < start || idx > end) return tree[node];
  if (start === end) return tree[node];
  let mid = (start + end) >> 1;
  return tree[node] = minIdx(update(start, mid, node * 2, idx), update(mid + 1, end, node * 2 + 1, idx));
};

init(0, N - 1, 1);

while (count--) {
  const [q, i, j] = input().split(' ').map(Number);
  if (q === 1) {
    arr[i - 1] = j;
    update(0, N - 1, 1, i - 1);
  } else {
    console.log(findMin(0, N - 1, 1, i - 1, j - 1)+1);
  }
}