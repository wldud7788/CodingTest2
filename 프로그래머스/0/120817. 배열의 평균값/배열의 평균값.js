function solution(numbers) {
    var sum = 0;
    for (i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    answer = sum / numbers.length;
    return answer
}