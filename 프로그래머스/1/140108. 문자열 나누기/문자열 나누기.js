function solution(s) {
    let x = s[0];
    let xCount = 0;
    let diffCount = 0;
    let answerCount = 0;
    
    for(let i = 0; i < s.length; i ++){
        if(x === s[i]) {
            xCount ++;
        } else if( x !== s[i]) {
            diffCount ++;
        }
        if (xCount === diffCount && (xCount !== 0)){
            answerCount ++;
            x = s[i+1];
        }
        if (xCount !== diffCount && (i === s.length-1)){
            answerCount ++;
        }
    }
   return answerCount
}