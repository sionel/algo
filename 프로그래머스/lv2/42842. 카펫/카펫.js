// function solution(brown, yellow) {
const solution = (brown, yellow) => {
    const board = brown + yellow
    let min = 3
    while(true){
        if(board % min === 0 ){
            let max = board / min
            for(let i = 1 ; i <= min-2 ; i++){
                if(yellow % i ===0 && yellow / i < max) return [max , min]
            }
        }
        min++
    }
}





























// function solution(brown, yellow) {
//     const grid = brown+ yellow
//     let result = []
//     const max = parseInt(grid ** 0.5)+1
//     for(let n = 3 ; n < max ; n++){
//         if(grid % n) continue
//         let m = grid / n
//         if((n-2)*(m-2) === yellow) return [m,n]
//     }
//     return result
// }

