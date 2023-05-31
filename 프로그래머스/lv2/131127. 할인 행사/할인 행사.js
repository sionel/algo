function solution(want, number, discount) {
    const basket = want.reduce((obj,cur,index)=>{
        obj[cur]= number[index]
        return obj
    },{})
    let answer = 0;
    
    for(let i = 0 ; i < discount.length ; i++){
        if(i > 9) {
            if(basket.hasOwnProperty(discount[i-10])) {
                basket[discount[i-10]]++
            }
        }
        if(basket.hasOwnProperty(discount[i])){
            basket[discount[i]]--
        }
        const done = Object.values(basket).filter(e=>e>0).length
        if(!done) {
            answer++
        }
    }
    return answer
} 