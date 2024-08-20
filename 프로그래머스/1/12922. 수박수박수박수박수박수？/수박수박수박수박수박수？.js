function solution(n) {
    var answer = '';
    // n의 몫을 구하기
    var quotient = Math.floor(n/2);
    // 짝수인 경우
    for(let i=0; i<quotient; i++){
        answer += '수박'
    }
    // 홀수인 경우
    if(n%2 !== 0){
        answer += "수"
    }
    return answer;
}