const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().split("\n");

const n = parseInt(input[0]);
const arr = input.slice(1).map((item) => item.split(" ").map(Number));
const eratos = (n, isNumerator) => {
  for (let i = 2; i * i < n; i++) {
    if (n % i === 0) {
      cnts[i] = cnts[i] ?? 0
      cnts[i] = isNumerator ? cnts[i] + 1 : cnts[i] - 1
      n /= i--
    }
  }
  cnts[n] = cnts[n] ?? 0
  cnts[n] = isNumerator ? cnts[n] + 1 : cnts[n] - 1

};
const primes = eratos();

const cnts = {}

for (let i = 0; i < n; i++) {
  let 분모 = arr[i][1];
  let 분자 = arr[i][1] - arr[i][0];
  for (let j = 0; j < primes.length; j++) {
    while (분모 % primes[j] === 0) {
      분모 /= primes[j];
      분모primes[j] = 분모primes[j] || 0;
      분모primes[j]++;
    }
    while (분자 % primes[j] === 0) {
      분자 /= primes[j];
      분자primes[j] = 분자primes[j] || 0;
      분자primes[j]++;
    }
    if (분모 === 1 && 분자 === 1) break;
  }
}
let 분모 = 1;
let 분자 = 1;
for (let i = 0; i < primes.length; i++) {
  if (분모primes[i] && 분자primes[i]) {
    const count = Math.min(분모primes[i], 분자primes[i]);
    분모 *= Math.pow(primes[i], 분모primes[i] - count);
    분자 *= Math.pow(primes[i], 분자primes[i] - count);

    delete 분모primes[i];
    delete 분자primes[i];
  } else if (분모primes[i]) {
    분모 *= Math.pow(primes[i], 분모primes[i]);
    delete 분모primes[i];
  } else if (분자primes[i]) {
    분자 *= Math.pow(primes[i], 분자primes[i]);
    delete 분자primes[i];
  }
  분모 %= 1000000007;
  분자 %= 1000000007;

  if (
    Object.keys(분모primes).length === 0 &&
    Object.keys(분자primes).length === 0
  )
    break;
}
console.log(분자, 분모);
