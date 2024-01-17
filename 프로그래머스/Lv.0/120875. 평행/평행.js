const solution = (dots) => {
    // let slope = new Set()
    let d1 = dots[0]
    let d2 = dots[1]
    let d3 = dots[2]
    let d4 = dots[3]
    return (getSlope(d1,d2) === getSlope(d3,d4)) || (getSlope(d1,d3) === getSlope(d2,d4)) || (getSlope(d1,d4) === getSlope(d3,d2)) ? 1 : 0
}

const getSlope = (d1, d2) => {
    const bunmo = d1[1] - d2[1]
    const bunja = d1[0] - d2[0]
    return bunja/bunmo
}
