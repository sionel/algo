function solution(n, results) {
    let count = Array.from({length : n+1},()=>[new Set() ,new Set()])
    let board = Array.from({length : n+1} ,()=>Array.from({length :n+1},()=>0))
    results.forEach(e=>{
        const [winner, loser] = e
        game(winner,loser, count, board)        
    })
    return count.filter(e => (e[0].size + e[1].size) === n-1).length
}

const game = (winner, loser, count, board) => {
    if(winner === loser) return
    count[winner][0].add(loser)
    count[loser][1].add(winner)
    board[winner][loser] = 1
    
    count[loser][0].forEach(e=>{
        if(!board[winner][e]){
            game(winner, e , count, board)
        }
    })
    count[winner][1].forEach(e=>{
        if(!board[e][loser]){
            game(e, loser , count, board)
        }
    })
    // for(let i = 1 ; i < count.length ; i++){
    //     if(i !== winner && board[i][winner] && board[i][winner] !== count[winner].size){
    //         game(i, loser, count, board)
    //     }
    //     if(i !== loser && board[loser][i] && board[loser][i] !== count[i].size){
    //         game(winner, i, count, board)
    //     }
    // }        
}
// const lose = (loser, winners, count, board) => {
//     while(winners.length){
//         const winner = winners.pop()
//         if(!board[winner][loser]){
//             count[loser]++
//             count[winner]++
//             board[winner][loser] = count[loser]
//         }
//         for(let i = 1 ; i < count.length ; i++){
//             if(board[i][winner] && board[i][loser] !== board[loser]){
//                 winners.push(i)
//             }
//         }
//     }
// }