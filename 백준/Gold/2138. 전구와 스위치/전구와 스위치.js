const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./dev/stdin";
const inputs = fs
  .readFileSync(filePath)
  .toString()
  .replaceAll("\r", "")
  .trim()
  .split("\n");

const n = Number(inputs[0]);
const current = inputs[1]
  .trim()
  .split("")
  .map((e) => !Number(e));
const target = inputs[2]
  .trim()
  .split("")
  .map((e) => !Number(e));

const turn = (current, target, init) => {
  let count = init;
  const temp = [...current];
  for (let i = 1; i < n - 1; i++) {
    if (temp[i - 1] !== target[i - 1]) {
      temp[i - 1] = !temp[i - 1];
      temp[i] = !temp[i];
      temp[i + 1] = !temp[i + 1];
      count++;
    }
  }
  if (temp[temp.length - 1] !== target[target.length - 1]) {
    temp[temp.length - 2] = !temp[temp.length - 2];
    temp[temp.length - 1] = !temp[temp.length - 1];
    count++;
  }
  const result = temp.some((e, i) => e !== target[i]) ? Infinity : count;
  return result;
};

const result = Math.min(
  turn(current, target, 0),
  turn([!current[0], !current[1], ...current.slice(2)], target, 1)
);

console.log(result === Infinity ? -1 : result);
