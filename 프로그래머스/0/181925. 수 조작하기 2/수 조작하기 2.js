function solution(numLog) {
    let prev = numLog[0];
    let answer = '';
    numLog.map((item)=>{
        if(item-prev === 0){
            return
        }
        if(item - prev === 1) {
            answer += "w"
            prev = item
        } else if (item-prev === -1) {
            answer += "s";
            prev = item;
        } else if (item - prev === 10) {
            answer += "d";
            prev = item;
        } else if (item - prev === -10) {
            answer += "a";
            prev =  item;
        }
    })
    return answer
}