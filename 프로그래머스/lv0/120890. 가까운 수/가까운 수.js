function solution(array, n) {
    let min = 101
    let answer = 0
    array.sort()
    array.forEach((e,index)=>{
        if(Math.abs(n-e) < min){
            answer = e
            min = Math.abs(n-e)
        }else {
            return false
        }
        
    })
    return answer;
}