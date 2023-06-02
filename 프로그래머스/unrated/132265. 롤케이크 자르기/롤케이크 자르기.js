function solution(topping) {
    const count = topping.length
    let start = topping.length -1
    let end = 0
    let pivot = topping.length >> 1
    while(true){
        const order = new Set(topping.slice(0,pivot)).size
        const younger = new Set(topping.slice(pivot)).size
        
        if(order >= younger){
            start = pivot
            pivot = start >> 1 
        } else {
            pivot = Math.ceil((start+pivot )/ 2)
        }
        if(pivot === start) break
        
    }
    pivot = start
    
    while(true){
        const order = new Set(topping.slice(0,pivot)).size
        const younger = new Set(topping.slice(pivot)).size
        if(order <= younger){
            end = pivot
            pivot = (count+end) >> 1 
        } else {
            pivot = (end+pivot) >> 1 
        }
        if(pivot === end) break
        
    }
    return end < start ? 0 : end-start +1;
}