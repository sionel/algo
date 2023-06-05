function solution(arr, divisor) {
    const result = arr.sort((a,b)=>a-b).filter(e=>e%divisor ? false:true)
    return result.length ? result : [-1];
}