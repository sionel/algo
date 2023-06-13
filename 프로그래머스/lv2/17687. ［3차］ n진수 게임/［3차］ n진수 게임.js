function solution(n, t, m, p) {
    let answer = '';
    let count =  (t-1)*m+p
    let numStr = ''
    let number = 0
    let strIdx = 0
    for(let i = 1 ; i <= count ; i++){
        if(!numStr[strIdx]){
            numStr = number.toString(n)
            number++
            strIdx = 0
        }
        if(i%m === p%m) answer += numStr[strIdx]
        strIdx++
    }
    return answer.toUpperCase();
}