function solution(arr, queries) {
    const answer = [];
    queries.forEach((item)=>{
        const [s,e,k] = item;
        const newArray = [];
        
        for(let i = s; i <= e; i++){
            if(arr[i] > k){
                newArray.push(arr[i])
            }
        }
        
        if(newArray.length > 0){
            answer.push(Math.min(...newArray))
        } else {
            answer.push(-1)
        }
        
    })
    return answer
}