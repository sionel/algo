function solution(sequence) {
    let min = 0 , max = 0
    // let minIndex = 0 , maxIndex = 0
    let seq = 1
    let sum = 0
    let p = sequence.map(e=>{
        sum += e*seq
        max = Math.max(sum , max)
        min = Math.min(sum , min)
        seq *= -1
    })
    return max - min
}

