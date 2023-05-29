const solution = (n, roads, sources, destination) => {
    const q = [destination]
    let qIndex = 0
    const nodes = {}
    const costs = {}
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
            if(isNaN(costs[e])) costs[e] = -1
            if(costs[e] === -1 || cost+1 < costs[e]){
                costs[e] = cost+1
                q.push(e)
            }
        })
        qIndex++
    }
    return sources.map(e=>isNaN(costs[e])? -1 : costs[e] )
}


// function solution(n, roads, sources, destination) {
//     let nodes = {}
//     let costs = {}
//     let tree = new Array(n+1)
//     for(let i = 1 ; i <= n ; i++){
//         costs[i] = i === destination ? 0 : 100001
//         tree[i] = i
//     }
//     for(let i = 0 ; i < roads.length ; i++){
//         const [a,b] = roads[i]
//         nodes[a] = (nodes[a] || new Set()).add(b)
//         nodes[b] = (nodes[b] || new Set()).add(a)
//         if(costs[a]+1 < costs[b]){
//             unionFind(nodes, costs, tree, [[a,b]])
//         }else if(costs[a] > costs[b]+1){
//             unionFind(nodes, costs, tree, [[b,a]])
//         }
//     }
//     console.log(tree)
//     return sources.map(e=>costs[e] === 100001 ? -1 : costs[e])
// }

// const unionFind = (nodes, costs, tree, process) => {
//     while(true){
//         if(process.length === 0) return
//         const [parent, child] = process.shift()
//         const nextNode = [...nodes[child]]
//         costs[child] = costs[parent]+1
//         tree[child] = parent
//         nextNode.forEach(e=>{
//             if(costs[e] > costs[child]+1){
//                 process.push([child,e])
//             }
//         })
//     }    
// }