function solution(n) {
    
    return eratos(n);
}

const eratos  = (n) => {
    const arr = Array(n+1).fill(true).fill(false, 0, 2)
    let count = 0
    for(let i = 2 ; i*i <= n ; i++) {
        if(arr[i]){
            count++
           for(let j = i * i; j <= n; j+=i){
                arr[j] = false;
            } 
        }
    }
    return arr.filter(e=>e).length
}