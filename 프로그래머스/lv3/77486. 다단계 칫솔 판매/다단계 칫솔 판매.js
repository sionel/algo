function solution(enroll, referral, seller, amount) {
    
    let answer = {}
    let tree = {}
    enroll.forEach((e,i)=>{
        tree[e] = referral[i]
        answer[e] = 0
    })
    for(let i = 0 ; i < seller.length ; i++){
        let cost = amount[i] * 100
        let person = seller[i]
        while(tree[person] && cost){
            let bribe = parseInt(cost/10)
            answer[person] +=  cost - bribe
            cost = bribe
            person = tree[person]
        }
    }
    return Object.values(answer);
}
