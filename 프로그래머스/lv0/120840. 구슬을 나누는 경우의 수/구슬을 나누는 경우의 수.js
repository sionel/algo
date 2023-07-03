const solution = (balls, share)=> balls === share ? 1 :  Math.round(fac(balls) / (fac(balls-share) * fac(share)))

const fac = (num) => num === 1 ? 1 : num*fac(num-1)
