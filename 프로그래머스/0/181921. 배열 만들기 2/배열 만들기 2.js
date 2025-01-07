function solution(l, r) {
    let answer = [];
    for (let i = l; i <= r; i++ ){
        if(i.toString().split('').every((item)=> item === '0' || item === '5' )){
            answer.push(i)
        }
    }
    return answer.length > 0 ? answer : [-1];
}