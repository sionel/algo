function solution(s, n) {
    let num
    var answer = '';
    
    for(let i = 0 ; i < s.length ; i++){
        num = s.charCodeAt(i)
        num += n
        if(s[i]<='Z') num = num > 90 ? num-26 : num
        else num = num > 122 ? num-26 : num
        answer += s[i]  === ' ' ? ' ': String.fromCharCode(num)
    }
    
    return answer;
}