function solution(players, callings) {
    let answer = [...players];
    const obj =players.reduce((obj, cur, i)=>{
        obj[cur] = i
        return obj
    },{})
    
    callings.forEach(e=>{
        let ranking = obj[e]
        let switched = ranking-1
        let temp = answer[switched]
        answer[switched] = answer[ranking]
        answer[ranking] = temp
        obj[e] = switched
        obj[temp] = ranking
    })
    return answer;
}