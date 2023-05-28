function solution(n, works) {
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
      if(!obj[1] && obj[0]) return 0
  }

  let answer = 0
  for (const key in obj) {
      answer += (Number(key)**2) * obj[key]
  }
    
  return answer
}