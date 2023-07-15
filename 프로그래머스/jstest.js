const weight = (p) => {
    const arr = Array(p.length).fill(0)
    let pivot = 0
    for(let i = 1 ; i < p.length ; i++){
        while(pivot > 0 && p[pivot] > p[i]) pivot = arr[pivot - 1]
        if(p[pivot] <= p[i]) arr[i] = ++pivot        
    }
    return arr
}