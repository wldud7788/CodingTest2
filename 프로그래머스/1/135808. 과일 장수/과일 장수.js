function solution(k, m, score) {
    // 높은 숫자 순으로 정렬
    score.sort((a,b)=>b-a);
    // 반복할 숫자 
    let repeatCount = Math.floor(score.length / m);
    // 이윤
    let price = 0;
    for(let i = 0; i < repeatCount; i++){
        price += score[m-1] * m * 1;
        score.splice(0,m);
    }
    return price;
}