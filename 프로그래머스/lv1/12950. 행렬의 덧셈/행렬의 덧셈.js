function solution(arr1, arr2) {
    return arr1.reduce((arr, cur,idx)=>{
        arr.push(arr2[idx].map((e,jdx)=>cur[jdx]+e))
        return arr
    },[])
}