function solution(sizes) {
    var answer = 0;
    
    let maxX = 0 , maxY = 0
    
    sizes = sizes.map(e=>[Math.max(...e) , Math.min(...e)])
    sizes.forEach(e=>{
        maxX = Math.max(maxX , e[0])
        maxY = Math.max(maxY , e[1])
    })
    
    // sizes.sort((a,b)=>a[0]-b[0])
    return maxX * maxY;
}