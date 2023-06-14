const solution = (n) => {
    let answer = 1
    for(let i = 2*n ; i > 0 ; i--){
        if(i === n+1) continue
        if(i <= n) answer /= i
        else answer *= i
    }
    return answer
}

// String.prototype.replaceAt = function(index, replacement) {
//     if (index >= this.length) {
//         return this.valueOf();
//     }
 
//     return this.substring(0, index) + replacement + this.substring(index + 1);
// }


// function solution(n) {
//     var answer = 0;
//     const set = new Set()
//     set.add('()')
//     while(true){
//         for (let item of set) {
//             if(item.length === n*2) return set.size
//             const arr = [...item]
//             arr.forEach((s,i)=>{
//                 if(s === ')'){
//                     set.add(item.replaceAt(i,")()"))
//                     set.add(item.replaceAt(i,"())"))
//                 }
//             })
//             set.delete(item)
//         }
//     }    
// }

