function solution(n) {
    const arr = new Array(11)
    arr[0] = 0
    arr[1] = 1
    for(var i = 2 ; i <= 11 ; i++){
        arr[i] = arr[i-1] * i
        if(arr[i] > n) return i-1
    }
}