function solution(n)
{
    let answer = n+"";

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    

    return [...answer].reduce((sum,cur)=>sum+Number(cur),0);
}