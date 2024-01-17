function solution(X, Y) {
    let answer = '';
    const x = [...X].sort((a,b)=>b-a)
    const y = [...Y].sort((a,b)=>b-a)
    let idxX= 0
    let idxY= 0
    
    while(true){
        if(x[idxX] === y[idxY]){
            answer+=x[idxX]
            idxX++
            idxY++
        }else if(x[idxX] > y[idxY]){
            idxX++
        }else {
            idxY++
        }
        if(idxX === x.length || idxY === y.length) break;
    }
    if(answer && answer[0] === "0") answer = "0" 
    return answer || "-1";
}