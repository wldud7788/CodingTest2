function solution(phone_number) {
    var num = phone_number.toString().slice(phone_number.length-4);
    var masking = "";
    for (let i=0; i<phone_number.length-4; i++){
        masking += "*";
    }
    var answer = masking + num;
    return answer;
}