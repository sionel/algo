function solution(n, costs) {
    
    costs.sort((a,b)=>a[2]-b[2])
    let arr = Array.from({length: n}, (e,i)=>i)    
    var answer = 0;
    costs.forEach(e=>{
        const p0 = find(arr, e[0])
        const p1 = find(arr, e[1])
        if(p0 !== p1){
            arr[p0] = arr[p1]
            answer += e[2]
        }        
    })
   
    return answer;
}
const find =(arr, x) => arr[x] === x ? x : find(arr,arr[x])
