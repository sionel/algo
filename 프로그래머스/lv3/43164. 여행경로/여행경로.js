const solution = (tickets) => {
    tickets.sort((a,b)=>a[1]<b[1]?-1:1)
    const result = []
    dfs(tickets, "ICN",result)
    return result
}

const dfs = (tickets, path, visit) => {
    
    visit.push(path)
    if(tickets.length === 0) return []
    else {
        let newTickets = [...tickets]
        for(let i = 0 ; i < tickets.length; i++){
            let ticket = tickets[i]
            if(path === ticket[0]){
                newTickets.splice(i,1)
                newTickets = dfs(newTickets, ticket[1] , visit)
                if(newTickets.length === 0) {
                    break
                } else {
                    visit.pop()
                    newTickets = [...tickets]
                }
            }
        }
        return newTickets
    }
    
}


//    function solution(tickets) {    
//     tickets.sort((a,b)=>a[1]<b[1]?-1:1)
//     const result = dfs(tickets,'ICN', [])
//     return result
// }

// const dfs = (tickets,destination, result) => {
//     result.push(destination)
//     // let newResult = [...result,destination]
//     if(tickets.length === 0) {
//         return
//     }
//     for(let i = 0 ; i < tickets.length ; i++){
//         let t = tickets[i]
//         if(t[0] === destination) {
//             let temp = [...tickets]
//             temp.splice(i,1)
//             flag = false
//             dfs(temp, t[1], newResult)
//         }
//         if(tickets.length === 0) {
//             return
//         }
//     }    
// }