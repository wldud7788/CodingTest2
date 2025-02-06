function solution(myString, pat) {
    let replacedStr = "";
    
    for(let char of myString){
        if(char === "A"){
            replacedStr += "B"
        } else {
            replacedStr += "A"
        }
    }
    
    return replacedStr.includes(pat) ? 1 : 0
}