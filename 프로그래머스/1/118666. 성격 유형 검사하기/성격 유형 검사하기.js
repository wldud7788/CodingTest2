function solution(survey, choices) {
    const map = new Map();
    let answer = "";
    const score = [3,2,1,0,1,2,3]
    const types = [
        ["R","T"],
        ["C","F"],
        ["J","M"],
        ["A","N"],
    ]
    "RTCFJMAN".split('').forEach((char)=>{
        map.set(char,0);
    })
    
    survey.forEach((item,idx)=>{
        const [first, second] = item.split(''); 
        if(choices[idx] < 4) {
            map.set(first,map.get(first)+score[choices[idx]-1])
        } else if(choices[idx] > 4){
            map.set(second,map.get(second)+score[choices[idx]-1])
        }
    })
    
    types.forEach((item)=>{
        const [first,second] = item;
        if(map.get(first) >= map.get(second)){
            answer += first
        } else {
            answer += second
        }
    })
    
    return answer
}