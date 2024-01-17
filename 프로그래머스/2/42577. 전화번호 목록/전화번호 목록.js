function solution(phone_book) {
    phone_book.sort()
    for(let i = 1 ; i < phone_book.length; i++){
        const pre = phone_book[i-1]
        const now = phone_book[i]
        if(now.slice(0,pre.length) === pre) return false
    }
    return true;
}