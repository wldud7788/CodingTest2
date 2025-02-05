function solution(arr) {
    const startIndex = arr.indexOf(2);
    const endIndex = arr.lastIndexOf(2);
    if(startIndex === -1){
        return [-1]
    }
    return arr.slice(startIndex,endIndex+1)
}