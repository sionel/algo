
const divide = (n , wires) => {
    
    const arr = Array.from({length : n+1},(_,i)=>i)
    
    const find = (n) => {
        return arr[n] !== n ? find(arr[n]) : n
    }
    
    const union = (a,b) => {
        const x = find(a)
        const y = find(b)
        
        arr[x] = y
    }
    
    for(let i = 0 ; i < wires.length ; i++){
        const [a,b] = wires[i]
        union(Math.min(a,b),Math.max(a,b))
    }
    const temp = find(arr[1])
    let result = 0
    for(let i = 2 ; i <= n; i++){
        if(find(arr[i]) !== temp) result++
    }
    
    return Math.max(n-result, result) - Math.min(n-result, result)
}

function solution(n, wires) {
    let result = 101
    for(let i = 0 ; i < wires.length ; i++){
        const cutted = wires.slice(0,i).concat(wires.slice(i+1))
        result = Math.min(result, divide(n, cutted))
    }
    return result
}
