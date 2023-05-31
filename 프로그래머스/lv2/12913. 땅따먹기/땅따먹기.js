function solution(land) {
    let stv = 0, sti = 0 , ndv = 0, ndi = 0
    const dp = [...land[0]]
    land.forEach((values,index)=>{
        if(index === 0) return 
        dp.forEach((e,i)=>{
            if(stv <= e){
                ndv = stv
                stv = e
                sti = i
            } else {
                if(ndv <= e){
                    ndv = e
                    ndi = i
                }
            }
        })
        values.forEach((e,i)=>{
            if(i !== sti) dp[i] = e+stv
            else dp[i] = e+ndv
        })
    })
    return Math.max(...dp);
}