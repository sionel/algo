const solution = (A,B) => {
    A.sort((a,b)=>a-b)
    B.sort((a,b)=>b-a)
    let answer = 0
    for(let i = 0 ; i < A.length; i++){
        answer += A[i] * B[i]   
    }
    return answer
}

// function solution(A,B){
//     var answer = new Set()
    
//     deep(A,B,0,answer)
//     return Math.min(...answer);
// }

// const deep = (A, B, sum ,set) => {
//     if(A.length === 1) return set.add(sum + A[0]*B[0])
//     for(let i = 0 ; i < A.length ; i++){
//         for(let j = 0 ; j < B.length ; j++){
//             deep(popIndex(A,i),popIndex(B,j),sum+A[i]*B[j],set)
//         }
//     }
// }


// const popIndex = (arr , index) => arr.slice(0,index).concat(arr.slice(index+1,arr.length))