function solution(str1, str2) {
    var answer = 0;
    const arr1 = [...str1.toLowerCase()]
    const arr2 = [...str2.toLowerCase()]
    
    const obj1 = {}
    const obj2 = {}
    const allKeywords = new Set()
    arr1.forEach((e,i,arr)=>{
        if(arr[i+1]) {
            const str = e+arr[i+1]
            if(!(str.match(/[^a-z]/g)?.length)){
                obj1[str] = (obj1[str] || 0) +1 
                allKeywords.add(str)
            }
                
        }
    })
    arr2.forEach((e,i,arr)=>{
        if(arr[i+1]) {
            const str = e+arr[i+1]
            if(!(str.match(/[^a-z]/g)?.length)){
                obj2[str] = (obj2[str] || 0) +1 
                allKeywords.add(str)
            }
        }
    })

    let intersection = 0
    let combination = 0
    allKeywords.forEach(e=>{
        combination += Math.max((obj1[e] || 0) , (obj2[e] || 0) )
        intersection += Math.min((obj1[e] || 0) , (obj2[e] || 0) )
    })
    
    
    return combination ? Number.parseInt(intersection/combination * 65536) : 65536
}