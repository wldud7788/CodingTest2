function solution(num_str) {
    const newArray = num_str.split('');
    const sum = newArray.reduce((sum,item)=>sum + +item,0);
    return sum;
}