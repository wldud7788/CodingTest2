function solution(arr, queries) {
    queries.forEach((item)=>{
        const [i,j] = item;
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
    })
    return arr
}