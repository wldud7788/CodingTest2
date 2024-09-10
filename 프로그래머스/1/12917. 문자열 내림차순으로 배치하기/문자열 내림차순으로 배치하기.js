function solution(s) {
    // 문자열 -> 배열변환 -> 아스키 코드로 정렬 -> 문자열 변환
    s = s.split('').sort((a,b) => b.charCodeAt(0) - a.charCodeAt(0)).join('');
    return s
}