function solution(name, yearning, photo) {
    let score = new Map();
    let sum = 0;
    let result = [];
    for(let i = 0; i<name.length; i++){
        score.set(name[i],yearning[i]);
    }
    photo.forEach((item)=>{
        let sum = 0;
        item.forEach((item2)=>{
            sum += score.get(item2) || 0;
        })
        result.push(sum);
    })
    return result;
}