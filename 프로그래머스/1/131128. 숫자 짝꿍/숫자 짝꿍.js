function solution(X, Y) {
    
    const xMap = new Map();
    const result = [];
    
    for(let char of X){
        xMap.set(char, (xMap.get(char) || 0) + 1)
    }
    
    for(let char of Y){
        if(xMap.has(char) && xMap.get(char) > 0){
            result.push(char);
            xMap.set(char, xMap.get(char)-1)
        } 
    }
    
    
    if(result.length === 0) {
        return "-1";
    }
    else if (Number(result.join('')) === 0){
        return "0";
    } 
    else {
        return result.sort((a,b) => b.localeCompare(a)).join('')
    }
}