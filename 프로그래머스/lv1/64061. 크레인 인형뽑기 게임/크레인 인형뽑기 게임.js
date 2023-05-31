function solution(board, moves) {
    const stack = [];
    const lines = Array.from({length :board.length } ,()=>[])
    for(let i = board[0].length - 1 ; i >= 0  ; i--){
        for(let j = 0 ; j < board.length ; j++){
            if(board[i][j]) lines[j].push(board[i][j])
        }
    }
    let result = 0
    let last = 0
    moves.forEach(e=>{
        const selected = e-1
        if(lines[selected].length){
            const bbop = lines[selected].pop()
            if(last && last === bbop) {
                stack.pop()
                result+=2
            }
            else stack.push(bbop)
            last = stack.length ? stack[stack.length-1] : 0
        }
    })
    return result;
}


