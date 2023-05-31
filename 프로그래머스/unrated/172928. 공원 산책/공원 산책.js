function solution(park, routes) {
    var answer = [];
    const boardSize = [park.length, park[0].length]
    const dir = {
        N: [-1, 0],
        S: [ 1, 0],
        W: [ 0,-1],
        E: [ 0, 1],
    }
    let position = []
    const parkBoard = park.map((line,i)=>{
        return [...line].map((e,j)=>{
            if(e ==='S') position = [i, j]
            return e==='X' ? 1 : 0
        })
    })
    const isBoard = ([x,y]) => 
        x >= 0 && x <boardSize[0] && y >= 0 && y <boardSize[1] && parkBoard[x][y] !== 1
    
    routes.forEach(e=>{
        const order = e.split(' ')
        const roleback = [...position]
        for(let i = 0 ; i < order[1] ; i++){
            const acc = dir[e[0]]
            position[0] += acc[0]
            position[1] += acc[1]
            if(!isBoard(position)) {
                position = [...roleback]
                break
            }
        }
    })
        
    return position;
}