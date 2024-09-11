function solution(price, money, count) {
    let result = 0;
    for (let i=1;  i<=count; i++){
        result += price*i;
    }
    let answer = result - money;
    return answer > 0 ?  answer :  0;
}