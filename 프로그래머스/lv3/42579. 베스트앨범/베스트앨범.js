function solution(genres, plays) {
    const result = []
    const total = {}
    const info = {}
    for(let i = 0 ; i < genres.length ; i++){
        let g = genres[i]
        info[g] =  info[g] ? [...info[g], [plays[i],i]] :[ [plays[i] ,i]]
        total[g] = total[g] ? total[g] + plays[i] : plays[i] 
    }
    let sort = Object.keys(total).sort((a,b)=>total[b]-total[a])
    for(let g in info){
       info[g]=info[g].sort((a,b)=>b[0]-a[0]).filter((e,i)=>i<2)
    }
    console.log(info)   
    
    for(let i = 0 ; i < sort.length ; i++){
        info[sort[i]].forEach(e=>result.push(e[1]))
    }
    return result
}