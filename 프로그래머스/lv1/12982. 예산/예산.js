function solution(d, budget) {
    d.sort((a,b)=>a-b)
    let index = 0
    while(d.length > index){
        budget -= d[index++]
        if(budget === 0) break
        else if(budget < 0) {
            index--
            break
        }
    }
    
    return index;
}

