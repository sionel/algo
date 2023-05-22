function solution(s) {
    var answer = '';
    const arr = s.split(' ')
    arr.forEach(word => {
    for(let i = 0 ; i < word.length ; i++){
        
            answer += i % 2 ? word[i].toLocaleLowerCase() : word[i].toLocaleUpperCase() 
        
    }   
        answer += ' '
    })
    
    
    return answer.slice(0,-1);
}