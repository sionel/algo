// solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]])



const solution = (maps) =>{
    let goalX = maps.length-1 , goalY = maps[0].length-1
    let xLength = maps.length , yLength = maps[0].length
    
    
    const isLoad=(x,y)=> x >=0 && x <=goalX && y>= 0 && y <=goalY && maps[x][y]
    
    const bfs = [[0,0,1]];
    while(bfs.length){
        const [x,y,step] = bfs.shift()
        
        if (x < 0 || x >= xLength) continue;
        if (y < 0 || y >= yLength) continue;
        if (maps[x][y] === 0) continue;
        if(x === goalX && y === goalY) return step
        
        maps[x][y] = 0
        isLoad(x+1,y) && bfs.push([x+1,y,step+1])
        isLoad(x-1,y) && bfs.push([x-1,y,step+1])
        isLoad(x,y+1) && bfs.push([x,y+1,step+1])
        isLoad(x,y-1) && bfs.push([x,y-1,step+1])
    }
     return -1
}

// function solution(maps) {
//     let ex = maps.length-1 , ey = maps[0].length-1
    
    
//     const isLoad=([x,y])=> x >=0 && x <=ex && y>= 0 && y <=ey && maps[x][y]
//     const openList = new MinHeap()
//     const closeList = Array.from({length : ex+1}, ()=> Array(ey+1).fill(false))
//     openList.push(new Node([0,0] , 1 , ex+ey))
    
//     const dir=[[0,1],[1,0],[0,-1],[-1,0]]
    
//     while(openList.length){
//         const curNode = openList.pop()
//         if(curNode.hValue === 0) return curNode.gValue
//         const [x,y] = curNode.point
//         closeList[x][y] = true
//         dir.forEach(e=>{
//             const [mx,my] =[x+e[0] , y+e[1]]
//             if(isLoad([mx,my]) && !closeList[mx][my]){
//                 const newNode = new Node([mx,my] , curNode.gValue+1 , ex - mx + ey-my)
//                 openList.push(newNode)
//             }
//         })
//     }
    
//     return -1;
// }
// class Node {
//     constructor(point ,g,h){
//         this.point = point
//         this.gValue = g
//         this.hValue = h
//     }
// }
// class MinHeap {
//     constructor(){
//         this.heap = [null]
//     }
    
//     push(node){
//         this.heap.push(node)
//         if(this.length === 1) return 
//         let childIdx = this.length
//         let parIdx = childIdx >> 1
        
//         while(parIdx && this.heap[childIdx].hValue < this.heap[parIdx].hValue){
//             [this.heap[childIdx], this.heap[parIdx]] = [this.heap[parIdx],this.heap[childIdx]];
//             childIdx = parIdx
//             parIdx = parIdx>>1 
//             // [parIdx ,childIdx] = [parIdx >> 1, parIdx];
//         }
//     }
    
//     pop(){
//         if(this.length === 0) return null
//         if(this.length === 1) return this.heap.pop()
//         const minNode = this.heap[1]
//         this.heap[1] = this.heap.pop()
        
//         let parIdx = 1 
//         let childIdx = parIdx*2
//         while(this.heap[childIdx]){
//             if(this.heap[childIdx+1] && this.heap[childIdx+1].hValue < this.heap[childIdx].hValue ){
//                 [this.heap[parIdx] , this.heap[childIdx+1]] = [this.heap[childIdx+1] , this.heap[parIdx]]
//             }else {
//                 [this.heap[parIdx] , this.heap[childIdx]] = [this.heap[childIdx] , this.heap[parIdx]]
//             }
//             [parIdx, childIdx] = [childIdx, childIdx*2]
//         }
        
//         return minNode
//     }

//     get length() {
//         return this.heap.length - 1;
//     }
// }