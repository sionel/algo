function solution(n, edge) {
    const queue = []
    const tree = Array.from({length:n},()=>[])
    queue[0] = 1
    let visit = Array.from({length:n},()=>0)
    visit[0] = 1
    for(let i of edge){
        tree[i[0]-1].push(i[1])
        tree[i[1]-1].push(i[0])
    }
    let count = 0
    while(queue.length){
        let now = queue.shift()
        for(let t of tree[now-1]){
            if(visit[t-1]===0){
                visit[t-1] = visit[now-1]+1
                count= visit[now-1]+1
                queue.push(t)
            }
        }
    }
    return visit.filter(e=>e===count).length
}
