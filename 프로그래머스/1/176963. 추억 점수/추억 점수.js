function solution(name, yearning, photo) {
    let scoreMap = new Map();
    let result = [];
    for(let i = 0; i<name.length; i++){
        scoreMap.set(name[i],yearning[i]);
    }
    photo.forEach((item)=>{
        let sum = 0;
        item.forEach((item2)=>{
            sum += scoreMap.get(item2) || 0;
        })
        result.push(sum);
    })
    return result;
}