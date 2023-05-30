function solution(k, m, score) {
    var answer = 0;
    score.sort((a,b)=>b-a)
    let temp = 0
    for(let i = 0 ; i < score.length ; i++){
        temp++
        if(temp === m){
            temp = 0 
            answer += score[i] * m
        }
    }
    return answer;
}