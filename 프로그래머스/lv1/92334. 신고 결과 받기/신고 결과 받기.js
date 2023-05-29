const solution = (id_list, reports, k)=> {
    const reporting = []
    const reported = {}
    // const reportSet = new Array(...new Set(reports))
    id_list.forEach(e=>{
        reporting[e] = 0
        reported[e] = new Set()
    })
    debugger
    while (reports.length) {
        const report = reports.pop()
        const [reporter, target] = report.split(' ')
        reported[target].add(reporter)
    }
    for (const target in reported) {
        const reporters = [...reported[target]];
        if(reporters.length >= k){
            reporters.forEach(reporter=>reporting[reporter]++ )
        } 
    }
    return id_list.map(e=>reporting[e])
}
// function solution(id_list, reports, k) {
//     let answer = [];
//     let reportSet = new Array(...new Set(reports))
//     let banned = []
//     id_list.forEach(id => {
//     });
//     const targets = {}
//     const data = {}
//     id_list.forEach((id) => {
//         data[id] = []
//         targets[id] = 0
//         answer.push(0)
//     });

//     while (reportSet.length) {
//         report = reportSet.pop()
//         const [reporter, target] = report.split(' ')
//         data[reporter].push(target)
//         targets[target]++
//         if (targets[target] >= k)
//             banned.push(target)
//     }
//     Object.keys(data).forEach((key, index) => {
//         banned.forEach(ban => {
//             data[key].indexOf(ban) !== -1 && answer[index]++
//         })
//     })
//     return answer
// }