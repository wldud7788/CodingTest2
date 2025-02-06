function solution(num_list) {
    num_list.sort((a,b)=>a-b);
    const slicedNum = num_list.slice(5);
    return slicedNum
}