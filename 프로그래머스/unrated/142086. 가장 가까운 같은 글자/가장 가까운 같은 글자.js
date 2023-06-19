function solution(s) {
    const answer =Array(s.length).fill(-1);
    
    for(let i = 0 ; i < s.length ; i++){
        const current = s[i]
        for(let j = i+1 ; j < s.length ; j++){
            if(s[j] === current) {
                answer[j] = j-i
                break;
            }
        }
    }
    return answer;
}