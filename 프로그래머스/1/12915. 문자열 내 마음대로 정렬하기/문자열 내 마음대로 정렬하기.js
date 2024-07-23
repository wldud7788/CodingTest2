function solution(strings,n){
    var answer = [];
    // 맨앞에 n의 값을 붙여준다.
    for(let i = 0; i<strings.length; i++) {
        strings[i] = strings[i][n] + strings[i];
    }
    // 문자 오름차순 정렬한다.
    strings.sort();
    console.log(strings);
    // 맨 앞 글자를 빼준다.
    for (let j = 0; j < strings.length; j++) {
        strings[j] = strings[j].replace(strings[j][0],"");
        answer.push(strings[j]);
    }
    return answer;
}
