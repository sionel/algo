const solution = (s, skip, index) => {
    const AtoZ = "abcdefghijklmnopqrstuvwxyz"
    let keyarr = ''
    const keymap = {}
    for(let i = 0 ; i < AtoZ.length ; i++){
        let e = AtoZ[i]
        if(skip.indexOf(e) !== -1) continue;
        keyarr+=e
    }
    for(let i = 0 ; i < keyarr.length ; i++){
        let ni = (i+index) % keyarr.length
        keymap[keyarr[i]] = keyarr[ni]
    }
    let answer = ''
    for(let i = 0 ; i < s.length ; i++){
        answer+=keymap[s[i]]
    }
    return answer
}

// function solution(s, skip, index) {
//     let skipNum =[]
//     for(let i = 0 ; i < skip.length ; i++){
//         skipNum.push(skip.charCodeAt(i))
//     }
//     skipNum.sort((a,b)=>a-b)
//     let answer = ''
//     let alphabet = s.split('')
//     alphabet.forEach(e=>{
//         let start = e.charCodeAt()
//         let end = start+index        
//         for(let i = 0 ; i < skipNum.length ; i++){
//             if(skipNum[i] > start && skipNum[i] <= end) end++
//         }
//         end = end > 122 ? end - 26 : end
//         answer += String.fromCharCode(end)
//     })
    

//     return answer;
// }