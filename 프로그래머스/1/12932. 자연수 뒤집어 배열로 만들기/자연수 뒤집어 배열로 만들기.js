function solution(n) {
    return n.toString() //정수를 문자열로 변환
        .split('')      //문자열을 ''단위로 자름
        .map(v => parseInt(v)) //배열을 하나씩 정수로 변환하여 순회하여 복사
        .reverse(); //배열을 뒤집어서 출력
}