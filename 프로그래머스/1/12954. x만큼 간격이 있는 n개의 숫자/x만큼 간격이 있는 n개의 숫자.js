function solution(x, n) {
    var answer = [];
    var cnt = 0;
    for (var i = 1; i<=n; i++){
        answer[cnt] = x*i;
        cnt++;
    }
    return answer;
}