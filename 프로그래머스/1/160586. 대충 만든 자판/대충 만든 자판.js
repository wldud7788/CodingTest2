function solution(keymap, targets) {
    const map = new Map();
    let answer = [];
    keymap.forEach((item)=>{
        for(let i=0; i < item.length; i++){
            if(!map.has(item[i]) || map.get(item[i]) > i+1){
                map.set(item[i],i+1)
            }
        }
    })
    
    targets.forEach((item)=>{
        let count = 0;
        for(let i = 0; i < item.length; i++){
            if(!map.has(item[i])){
                return answer.push(-1)
            }
            count += map.get(item[i]);
        }
        answer.push(count)
    })
    return answer
}