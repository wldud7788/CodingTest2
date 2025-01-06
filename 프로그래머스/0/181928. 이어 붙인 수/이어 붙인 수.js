function solution(num_list) {
    let 짝수 = ""
    let 홀수 = ""
    num_list.map((item)=>item %2 == 0 ? 짝수 += item : 홀수 += item);
    return +짝수 + +홀수;
}