function solution(num_list) {
    let oddSum = 0;
    let evenSum = 0;
    num_list.forEach((item,idx)=>{
        if(idx % 2 === 0){
            oddSum += item
        } else {
            evenSum += item
        }
    })
    return oddSum > evenSum ? oddSum : evenSum
}