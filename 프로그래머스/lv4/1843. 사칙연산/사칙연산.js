function solution(arr) {
    const operationCount = (arr.length >> 1) + 1
    const maxDp = Array.from({length:operationCount},() => Array(operationCount).fill(-Infinity));
    const minDp = Array.from({length:operationCount},() => Array(operationCount).fill(Infinity));
    
    for(let i = 0 ; i < operationCount ; i++){
        maxDp[i][i] = Number(arr[i*2])
        minDp[i][i] = Number(arr[i*2])
    }
    
    for(let cnt = 1; cnt < operationCount; cnt++) {
        for(let i = 0; i < operationCount - cnt; i++) {
            let j = i + cnt;
            for(let k = i; k < j; k++) {
                // 연산자의 위치를 구하는 인덱스 값에 주의
                if(arr[k*2+1] === '+') {
                    maxDp[i][j] = Math.max(maxDp[i][j], maxDp[i][k] + maxDp[k+1][j]);
                    minDp[i][j] = Math.min(minDp[i][j], minDp[i][k] + minDp[k+1][j]);
                } else {
                    maxDp[i][j] = Math.max(maxDp[i][j], maxDp[i][k] - minDp[k+1][j]);
                    minDp[i][j] = Math.min(minDp[i][j], minDp[i][k] - maxDp[k+1][j]);    
                }
            }

        }
    }
    return maxDp[0][operationCount-1]
}