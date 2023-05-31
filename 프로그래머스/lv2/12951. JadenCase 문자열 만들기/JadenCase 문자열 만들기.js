function solution(s) {
    return s.split(' ').map(e=>{
        if(!e) return ''
        let str = e.toLowerCase()
        return str[0]?.toUpperCase() + str?.slice(1)
    }).join(' ');
}