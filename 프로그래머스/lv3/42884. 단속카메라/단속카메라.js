function solution(routes) {
    var answer = 0;
    let pivot = -30001
    routes.sort((a,b)=>a[1]-b[1])
    for(let i = 0 ; i < routes.length ; i++){
        if(pivot < routes[i][0]){
            answer++
            pivot = routes[i][1]
        } else continue
    }
    return answer;
}