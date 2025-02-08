function solution(my_string, m, c) {
    const result = [];
    for(let i = 0; i < my_string.length; i += m){
        result.push(my_string.slice(i,i+m))
    }
    const answer = result.map((item)=>{
        return item[c-1];
    })
    return answer.join('')
}