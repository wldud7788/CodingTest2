function solution(arr) {
    var answer = [];
    if (arr.length < 2){
        return [-1];
    }
    // 최솟값 찾기
    const min = Math.min(...arr);
    // 최솟값을 제거하고 리턴
    return arr.filter(num=>num !== min);
}