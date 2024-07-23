function solution(s){
    s = s.toLowerCase();
    let p_num = 0;
    let s_num = 0;
    for(let i=0; i < s.length; i++){
        if (s[i] === "p") p_num ++;
        else if (s[i] === "y") s_num ++;

    }
    if (p_num !== s_num)
        return false;
    else (p_num === s_num)
        return true;
}