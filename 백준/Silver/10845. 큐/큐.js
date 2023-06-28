let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
input = input.split('\n');
const N = parseInt(input.shift());
let answer = '', queue = [];
input.forEach((instruction)=>{
    if(instruction.includes("push"))
        queue.push(Number(instruction.split(/\D/g).filter(Number).map(Number)[0]));
    else if(instruction==='pop')
        answer+=((queue.length>0?queue.shift():-1)+'\n');
    else if(instruction==='front')
        answer+=((queue.length>0?queue[0]:-1)+'\n');
    else if(instruction==='back')
        answer+=((queue.length>0?queue[queue.length-1]:-1)+'\n');
    else if(instruction==='size')
        answer+=(queue.length+'\n');
    else
        answer+=((queue.length===0?1:0)+'\n');
})
console.log(answer.trim());