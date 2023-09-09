const solution = (n, roads, sources, destination) => {
    const q = [destination]
    let qIndex = 0
    const nodes = {}
    const costs = Array(n+1).fill(-1)
    costs[destination] = 0
    for(let i = 0 ; i < roads.length ; i++){
        const [a,b] = roads[i]
        nodes[a] = (nodes[a] || new Set()).add(b)
        nodes[b] = (nodes[b] || new Set()).add(a)
    }
    while(q.length > qIndex){
        const now = q[qIndex]
        const cost = costs[now]
        const nextArr = [...nodes[now]]
        nextArr.forEach(e=>{
            if(costs[e] === -1 || cost+1 < costs[e]){
                costs[e] = cost+1
                q.push(e)
            }
        })
        qIndex++
    }
    return sources.map(e=>isNaN(costs[e])? -1 : costs[e] )
}

