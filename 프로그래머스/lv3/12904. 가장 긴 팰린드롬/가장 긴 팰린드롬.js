// function solution(s) {
//     let half = s.length >> 1
//     let max = 0
//     for (let i = 0; i < half; i++) {
//         let j = 0
//         while(i+j <= half && s[half-i-j] === s[half-i+j]) {
//             max = Math.max(max,2*j+1)
//             j++
//         }
//         while(i+j <= half && s[half+i-j] === s[half+i+j]) {
//             max = Math.max(max,2*j+1)
//             j++
//         }
//         if(max+1 >= s.length-(2*i)) return max
//     }
//     return max;
// }

function solution(s) {
    let max = 0
    for (let i = 0; i < s.length; i++) {
        let pivot = 0
        while(i >= pivot && s[i-pivot] === s[i+pivot]) {
            max = Math.max(max,pivot*2+1)
            pivot++
        }
        pivot = 0
        while(i >= pivot && s[i-pivot] === s[i+1+pivot]) {
            max = Math.max(max,(pivot+1)*2)
            pivot++
        }
    }
    return max;
}
