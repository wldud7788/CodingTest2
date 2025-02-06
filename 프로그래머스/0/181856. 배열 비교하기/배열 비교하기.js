function solution(arr1, arr2) {
    const arr1Sum = arr1.reduce((sum,item)=> sum+item, 0);
    const arr2Sum = arr2.reduce((sum,item)=> sum+item, 0);
    if(arr1.length ===  arr2.length){
        if(arr1Sum > arr2Sum){
            return 1
        }
        if(arr1Sum < arr2Sum){
            return -1;
        } else {
            return 0
        }
    } else {
        if(arr1.length > arr2.length){
            return 1
        } else{
            return -1
        }
    }
}