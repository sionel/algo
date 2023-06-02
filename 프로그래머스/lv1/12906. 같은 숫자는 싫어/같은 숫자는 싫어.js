function solution(arr)
{

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    let temp 
    var answer = arr.filter(e=>{
        if(temp !== e) {
            temp = e
            return true
        } else return false
    })
    
    return answer;
}