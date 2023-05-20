function solution(nodeinfo) {
    nodeinfo.forEach((e,i)=>e.push(i+1))
    let x = [...nodeinfo.sort((a,b)=>a[0]-b[0])]
    let y = [...nodeinfo.sort((a,b)=>b[1]-a[1])]
    const prefix = []
    const postfix = []
    preorder(y,prefix)
    postorder(y,postfix)
    return [prefix , postfix]
}

const preorder = (arr, answer) => {
    let node = arr[0]
    let left = [] , right = []
    
    for(let n of arr){
        if(n[0] < node[0]) left.push(n)
        else if(n[0] > node[0]) right.push(n)
    }
    answer.push(node[2])
    if(left.length)preorder(left,answer)
    if(right.length)preorder(right,answer)

}

const postorder = (arr, answer) => {
    let node = arr[0]
    let left = [] , right = []
    
    for(let n of arr){
        if(n[0] < node[0]) left.push(n)
        else if(n[0] > node[0]) right.push(n)
    }
    if(left.length)postorder(left,answer)
    if(right.length)postorder(right,answer)
    answer.push(node[2])
    
}

// const findIndex = (arr , node) => {
//     let index = 0
//     arr.forEach((e,i)=>{
//         if(e[2]===node[2]) index = i
//         return false
//     })
//     return index
// }
// function solution(nodeinfo) {
//     const pre = []
//     const post = []
//     const tree = []
    
//     nodeinfo.sort((a,b)=>a[0]-b[0]).sort((a,b)=>b[1]-a[1])
//     let preNum = 0
//     let depth = -1
//     for(let n of nodeinfo){
//         // console.log(n)
//         if(preNum !== n[1]){
//             depth++
//             preNum = n[1]
//             tree[depth] = [n[0]]
//         } else {
//             tree[depth].push(n[0])
//         }
//     }
//     console.log(tree)
//     return ;
// }