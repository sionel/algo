function solution(babbling) {

    return babbling.map(e=>e.replace(/ayaaya|yeye|woowoo|mama/g,'-')).map(e=>e.replace(/aya|ye|woo|ma/g,'')).filter(e=>!e).length;
}

