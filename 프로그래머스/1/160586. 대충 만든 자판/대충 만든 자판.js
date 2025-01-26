function solution(keymap, targets) {
    const keyCountMap = new Map();
    
    for(let element of keymap){
        for(let i = 0; i < element.length; i++){
           if (!keyCountMap.has(element[i]) || keyCountMap.get(element[i]) > i + 1) {
                keyCountMap.set(element[i], i + 1);
            }
        }
    }
    
    const answer = targets.map(ele => {
        let count = 0;
        for (let char of ele){
            if(!keyCountMap.has(char)){
                return -1;
            }
            count += keyCountMap.get(char);
        }
        return count;
    });
    
    return answer;
}