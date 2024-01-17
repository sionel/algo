function solution(s) {
    
    return [...s].sort().filter((e,i,arr)=>arr.lastIndexOf(e) === arr.indexOf(e)).join("")
}