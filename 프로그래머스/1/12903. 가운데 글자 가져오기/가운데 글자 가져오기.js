function solution(s) {
    var answer = '';
    
    // 문자열 s의 가운데 찾기
    let mid = s.length/2
    // 짝수일 경우 홀수일 경우의 가운데 값
    return s.length % 2 == 0 ? s[mid-1] + s[mid] : s[Math.floor(mid)]
    
}