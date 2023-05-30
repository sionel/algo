function solution(s) {
    var answer = '';
    let isOdd = s.length % 2
    return (isOdd ? "" : s[ (s.length >> 1)-1 ]) + s[(s.length >> 1)] ;
}