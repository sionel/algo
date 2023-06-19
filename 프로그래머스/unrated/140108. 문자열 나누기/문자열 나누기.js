function solution(s) {
    let answer = 0
    let count = 0
    let same = ''
    for(let i = 0 ; i < s.length ; i++){
        const w = s[i]
        if(count){
            if(same === w){
                count++
            }else {
                count--
            }
        }else {
            same = w
            count++
            answer++
        }
    }
    return answer;
}