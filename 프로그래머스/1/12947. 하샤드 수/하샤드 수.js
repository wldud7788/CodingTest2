function solution(x) {
    // x 정수를 문자열로 바꾼 후 잘라서 num의 배열에 정수화 하여 넣어준다.
    const num = x.toString().split('').map(Number)
    // 자릿수를 더한다.
    const Harshad = num.reduce((acc, curr) => acc+curr);
    return x % Harshad === 0 ? true:false
    
}