function solution(n) {
    let binary = n.toString(2)
    binary  = [...('0'+ binary)]
    let count = 0
    for(let i = binary.length -1 ; i >= 0 ; i--){
        if(binary[i] === '1') {
            count ++
            binary[i] = '0'
        }else if(count){
            binary[i] = '1'
            count--
            let index = binary.length -1
            while(count){
                binary[index--] = '1'
                count--
            }
            
            return parseInt(binary.join(''),2)
        }
    }
    return binary;
}