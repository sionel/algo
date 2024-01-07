function solution(begin, target, words) {
    let targetIdx = words.findIndex(e=>e===target)
    if(targetIdx === -1) return 0
    targetIdx++
    words.unshift(begin)
    const arr = Array.from({length : words.length},()=>Array.from({length : words.length},()=>0))
    
    for(let i= 0 ; i < words.length ; i++){
        for(let j = i+1 ; j < words.length ; j++){
            console.log(words[i],words[j])
            if(compare(words[i],words[j])){
                arr[i][j] = 1
                arr[j][i] = 1
            }
        }
    }
    
    const queue = [[0 , 0]]
    let idx = 0
    while(queue.length !== idx){
        const [now , cost] = queue[idx++]
        for(let i = 0 ; i < arr.length ;i++){
            if(arr[now][i]) {
                if(i === targetIdx) return cost+1
                queue.push([i,cost+1])
            }
        }
    }
    

    return 0;
}


const compare = (begin,target) => [...begin].filter((e,i)=>target[i] !== e).length === 1
