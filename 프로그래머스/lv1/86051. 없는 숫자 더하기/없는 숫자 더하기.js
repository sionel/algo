function solution(numbers) {
    // var answer = -1;
    return 45 - numbers.reduce((sum,cur)=>sum+Number(cur),0);
}