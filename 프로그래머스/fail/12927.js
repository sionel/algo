function solution(n, works) {
  // 테스트케이스 3번과 효율 2번 이 틀리는 코드
  works.sort((a,b)=>b-a)
  let process = 0
  
  while(n--){
      if(works[process] === 0) return 0
      works[process]--
      if(process === works.length -1 || works[process] === works[process+1]) process = 0
      else if(works[process] < works[process+1] ) process++
      // else if(process && works[process-1] > works[process]) process--
  }
  
  return works.reduce((fatigue,cur)=>fatigue+(cur**2),0);
}

function solution(n, works) {
  // 테스트케이스 12번만 틀리는 코드
  let obj = {}
  works.forEach(e=>obj[e] = (obj[e] || 0 )+ 1 )
  let max = Math.max(...works)
  while(n){
      if(obj[max] > n) {
          obj[max] -= n
          obj[max-1] = (obj[max-1] || 0) + n
          n = 0
      } else {
          obj[max-1] = (obj[max-1] || 0) + obj[max]
          n -= obj[max]
          delete obj[max--]
      }
      if(obj[0]) return 0
  }
  
  let answer = 0
  for (const key in obj) {
      answer += (Number(key)**2) * obj[key]
  }
  return answer
}
/* 
9 8 8 7
8 8 8 7
7 8 8 7
7 7 8 7
7 7 7 7
6 7 7 7
6 6 7 7
6 6 6 7
6 6 6 6
*/
