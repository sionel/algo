function solution(n, works) {
  let answer = 0;
  
  works.sort((a,b)=>b-a)
  let process = 0
  let preIndex = 0
  while(n--){
      if(works[process] === 0) return 0
      works[process]--
      if(process === works.length -1 || works[process] === works[process+1]) process = 0
      else if(works[process] < works[process+1] ) process++
      // else if(process && works[process-1] > works[process]) process--
  }
  
  return works.reduce((fatigue,cur)=>fatigue+(cur**2),0);
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