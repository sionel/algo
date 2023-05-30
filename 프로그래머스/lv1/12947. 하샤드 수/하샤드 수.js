function solution(x) {
    x+=''
    let arr = [...x]
    let sum = arr.reduce((sum,cur)=>sum+Number(cur),0)
    return x % sum ? false : true;
}