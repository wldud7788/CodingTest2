function solution(friends, gifts) {
    // 친구의 이름과 인덱스를 저장할 배열 맵 선언
    const idx = new Map();
    friends.forEach((item,index)=> {
        return idx.set(item,index)
    })
    const 배열길이 = friends.length;
    // 주고받은 선물을 저장할 이차원 배열 생성
    const 이차원배열 = Array(배열길이).fill(0).map((item)=>Array(배열길이).fill(0));
    const giftScore = Array(배열길이).fill(0);
    // 선물 지수 및 주고받은 선물 수 기록
    gifts.forEach((item)=>{
        // 준사람 a,  받은사람 b
        const [선물준사람,선물받은사람] = item.split(" ");
        // giftScore 의 idx 인덱스에 추가
        giftScore[idx.get(선물준사람)] ++;
        giftScore[idx.get(선물받은사람)] --;
        // 이차원배열에 주고받은 선물 수 기록
        이차원배열[idx.get(선물준사람)][idx.get(선물받은사람)] ++;
    })
    // 친구별 다음달 받을 선물 수 저장하는 배열 
    const 다음달받을선물수 = Array(배열길이).fill(0);
    
    // 이차원배열을 비교하여 다음달 받을 선물 수가 가장 많은 사람 구하기
    for(let i = 0; i<배열길이; i++){
        for(let j = 0; j<배열길이; j++){
            if(i===j){
                continue;
            }
            if(이차원배열[i][j] > 이차원배열[j][i]){
                다음달받을선물수[i] ++;
            } else if(이차원배열[i][j] == 이차원배열[j][i]){
                if(giftScore[i] > giftScore[j]){
                    다음달받을선물수[i] ++
                }
            }
        }
    }
    return Math.max(...다음달받을선물수)
}