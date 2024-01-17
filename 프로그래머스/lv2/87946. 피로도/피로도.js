function solution(k, dungeons) {
    const dfs = (k,dungeons) => {
        let result = dungeons.length
        for(let i = 0 ; i < dungeons.length ; i++){
            const [min, use] = dungeons[i]
            if(k>= min){
                const tempArr = dungeons.slice(0,i).concat(dungeons.slice(i+1))    
                result = Math.min(result, dfs(k-use , tempArr))   
            }
        }
        return result
    }
    
    const answer = dfs(k,dungeons)
    
    return dungeons.length - answer;
}