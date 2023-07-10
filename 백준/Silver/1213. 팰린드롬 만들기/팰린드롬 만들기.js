const fs = require("fs");

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const str = fs.readFileSync(filePath).toString().trim();

const sol = (name) => {
  const obj = {}
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = obj[name[i]] || 0
    obj[name[i]]++
  }

  const keys = Object.keys(obj)
  keys.sort((a, b) => a.localeCompare(b))

  let result = ''
  let reverse = ''
  let center = ''
  for (let i = 0; i < keys.length; i++) {
    const k = keys[i]
    if (obj[k] % 2) {
      if (center) {
        console.log("I'm Sorry Hansoo");
        return
      }
      else center = k
    }
    result = result + k.repeat(obj[k] / 2)
    reverse = k.repeat(obj[k] / 2) + reverse

  }

  result = result + center + reverse
  console.log(result);
}

sol(str)