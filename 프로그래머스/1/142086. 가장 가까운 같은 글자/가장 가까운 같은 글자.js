function solution(s) {
    let answer = []; 
    let tmpArray = []; 
    s.split('').forEach((item,idx)=>{
        if (idx <= 0){
            answer.push(-1)
            tmpArray.push(item)
        } else if(tmpArray.includes(item)){ 
            answer.push(idx- tmpArray.lastIndexOf(item));
            tmpArray.push(item);
        } else { 
            answer.push(-1);
            tmpArray.push(item);
        }
    })
    return answer
}