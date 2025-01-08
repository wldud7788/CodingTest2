function solution(number) {
    let sum = 0;
    number.split('').map((item)=> sum += +item);
    return sum % 9
}