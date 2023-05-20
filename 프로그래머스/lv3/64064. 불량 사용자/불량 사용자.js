function solution(userId, banned_id) {
    let answer = new Set();
    const bP = banned_id.map(e=>e.replaceAll("*",'.'))
    search(0,0,userId,answer,bP)
    // console.log(answer)
    return answer.size;
}

function search(index,visit,userId,answer,bP){
   // console.log(bP)
    if(index === bP.length){
        answer.add(visit)
        return
    }
    for(let i in userId){
        if((visit & (1<<i)) >0 ||  !(RegExp(bP[index]).test(userId[i]) && bP[index].length === userId[i].length )) continue 
 
        search(index+1, visit|(1<<i), userId , answer,bP )
    }  
}