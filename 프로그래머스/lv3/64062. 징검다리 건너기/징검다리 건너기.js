function solution(stones, k) {
    var answer = 0;
    let start = 0, end = stones.reduce((max,s)=>Math.max(max,s),0)
    // let start = 0, end = Math.max(...stones)
    while(start <= end){
        let mid = Math.floor((start+end)/2)
        if(available(mid,stones,k)){
            start = mid + 1
            answer = Math.max(answer , mid)
        } else end = mid -1
    }
    return answer;
}

const available = (n, stones, k) => {
    let skip = 0
    for(let stone of stones){
        if(stone < n){
            skip +=1
            if(skip >= k) return false
        } else skip = 0
    }
    return true
}

// function solution(distance, rocks, n) {
//     var answer = 0;
//     let start = 0 , end = distance
//     rocks.sort((a,b)=>a-b)
//     rocks.push(distance)
//     while(start <= end){
        
//         let mid = Math.floor((start+end)/2)        
//         console.log(start,mid,end)
//         del = 0
//         pre = 0
//         for(let rock of rocks){
//             if(rock-pre < mid) del+=1
//             else pre = rock
//             if(del > n) break
//         }        
//         if(del > n) end = mid - 1
//         else {
//             answer = mid
//             start = mid + 1
//         }
        
//     }
    
//     return answer
// }