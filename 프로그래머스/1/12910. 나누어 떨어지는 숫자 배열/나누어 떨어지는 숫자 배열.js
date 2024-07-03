function solution(arr, divisor) {
    var answer = [];
    for(cnt=0,i=0; i<arr.length; i++){
        if(arr[i]%divisor == 0){
            answer[cnt] = arr[i];
            cnt ++
        }
    }
    if (answer.length ==0){
        answer[0] = -1;
    }
    return answer.sort((a,b)=>(a-b));
}