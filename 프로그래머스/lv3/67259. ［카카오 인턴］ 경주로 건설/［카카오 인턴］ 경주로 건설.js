function solution(board) {
    let answer = 0;
    let l = board.length
    
    const isBoard = (x,y) =>
        x >= 0 && x < l && y >= 0 && y < l && board[x][y] === 0
    
    // x, y 방향
    const dirs = [
        [ 0, 1],
        [ 1, 0],
        [ 0,-1],
        [-1, 0]
    ]
    
    // x,y 각 좌표, 바라보는 방향, costㅂ
    // 방향은 dirs의 인덱스로 확인
    const  q = [
        [0,0,0,0],
        [0,0,1,0]
    ]
    
    // dp에 x,y를 저장하는것 까진 알았으나 바라보는 방향에 따라 다르니
    // 방향값도 dp로 구분해줘야함
    const dp = Array.from({ length: l }, () =>
        Array.from({ length: l }, () => Array(dirs.length).fill(Infinity))
    );    
    
    while(q.length){
        const [prevX,prevY, prevDirIndex, cost] = q.shift()
        
        dirs.forEach(([dx,dy],newDirIndex)=>{
            const [newX, newY] =[prevX+dx, prevY+dy]
            if(!isBoard(newX, newY)) return
            const newCost = cost + (prevDirIndex === newDirIndex ? 100 : 600)
            if(newCost < dp[newX][newY][newDirIndex]){
                dp[newX][newY][newDirIndex] = newCost
                q.push([newX,newY,newDirIndex,newCost])
            }                
        })
    }
    
    return Math.min(...dp[l-1][l-1]);
}
