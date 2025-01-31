function solution(survey, choices) {
    const score = [3,2,1,0,1,2,3]
    const map = new Map();

    "RTCFJMAN".split('').forEach((char)=>{
        map.set(char,0);
    })
    
    let answer = "";
    survey.forEach((item,idx)=>{
        const [첫번째, 두번째] = item.split(''); 
        if(choices[idx] < 4) {
            map.set(첫번째,map.get(첫번째)+score[choices[idx]-1])
        } else if(choices[idx] > 4){
            map.set(두번째,map.get(두번째)+score[choices[idx]-1])
        }
    })
    
    if(map.get("R") >= map.get("T")){
        answer += "R"
    } else {
        answer += "T"
    }
    
    if(map.get("C") >= map.get("F")){
        answer += "C"
    } else {
        answer += "F"
    }
    
    if(map.get("J") >= map.get("M")){
        answer += "J"
    } else {
        answer += "M"
    }
    
    if(map.get("A") >= map.get("N")){
        answer += "A"
    } else {
        answer += "N"
    }
    
    return answer
}