
function solution(maps) {
    const answer = [];
    const rowSize = maps.length
    const colSize = maps[0].length
    const visit = maps.map(e=>e.split('').map(e=>e ==='X'))
    const isMap = (x,y) =>  x>=0 && y >= 0 && x< rowSize && y< colSize && !visit[x][y]
    const dfs = (x,y) => {
        visit[x][y] = true
        let number = Number(maps[x][y])
        if(isMap(x+1,y)) number += dfs(x+1,y)
        if(isMap(x-1,y)) number += dfs(x-1,y)
        if(isMap(x,y+1)) number += dfs(x,y+1)
        if(isMap(x,y-1)) number += dfs(x,y-1)
        return number
    }
    for(let i = 0 ; i < rowSize ; i++){
        for(let j = 0 ; j < colSize ; j++){
            if(isMap(i,j)) {
                answer.push(dfs(i,j))
            }
        }
    }
    
    return answer.length ? answer.sort((a,b)=>a-b) : [-1];
}
