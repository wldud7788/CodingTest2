function solution(a, b, c) {
    // 세 숫자가 모두 다를 경우
    if(a !== b && a !== c && b !== c) {
        return a + b + c;
    } // 세 숫자가 모두 같을 경우
    else if (a === b && a === c && b === c) {
        return (a+b+c) * (a*a + b*b + c*c) * (a*a*a + b*b*b + c*c*c);
    } else {
        return (a + b + c) * (a*a + b*b + c*c)

    }
}