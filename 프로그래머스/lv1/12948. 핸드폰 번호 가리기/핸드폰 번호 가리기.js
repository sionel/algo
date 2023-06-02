function solution(phone_number) {     
    const reg = /\d(?=\d{4})/g
    // const reg = RegExp(`\\d{${starCount}}`)
    console.log(reg)
    return phone_number.replace(reg,'*');
}