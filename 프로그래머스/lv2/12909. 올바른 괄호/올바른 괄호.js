function solution(s){
    let stack = 0;
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === '(') stack++
        else if(stack) stack--
        else return false
    }
    return stack ? false : true;
    
    // while(s.match(/\(\)/g,'')?.length){
    //     s = s.replace(/\(\)/g,'')
    // }
    // return s ? false : true
}