function solution(n) {
    var answer = 
        n.toString()
        .split('')
        .sort((a,b)=>b-a);
    return parseInt(answer.join(''));
}