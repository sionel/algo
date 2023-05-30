function solution(n) {
    if(n%2) return 2
    var answer = 0;
    let num = n-1
    for(let i = 3 ; i <= num ; i++){
        if(num % i === 0 )return i
    }
    return answer;
}