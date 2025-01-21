function solution(friends, gifts) {
    // 친구의 이름과 인덱스를 저장할 배열 맵 선언
    const friendIndex = new Map();
    friends.forEach((item,index)=> {
        return friendIndex.set(item,index)
    })
    const arrayLength = friends.length;
    // 주고받은 선물을 저장할 이차원 배열 생성
    const giftLog = Array(arrayLength).fill(0).map((item)=>Array(arrayLength).fill(0));
    const giftScore = Array(arrayLength).fill(0);
    // 선물 지수 및 주고받은 선물 수 기록
    gifts.forEach((item)=>{
        // 준사람 a,  받은사람 b
        const [giver,receiver] = item.split(" ");
        // giftScore 의 idx 인덱스에 추가
        giftScore[friendIndex.get(giver)] ++;
        giftScore[friendIndex.get(receiver)] --;
        // 이차원배열에 주고받은 선물 수 기록
        giftLog[friendIndex.get(giver)][friendIndex.get(receiver)] ++;
    })
    // 친구별 다음달 받을 선물 수 저장하는 배열 
    const nextMonthGifts = Array(arrayLength).fill(0);
    
    // 이차원배열을 비교하여 다음달 받을 선물 수가 가장 많은 사람 구하기
    for(let i = 0; i<arrayLength; i++){
        for(let j = 0; j<arrayLength; j++){
            if(i===j){
                continue;
            }
            if(giftLog[i][j] > giftLog[j][i]){
                nextMonthGifts[i] ++;
            } else if(giftLog[i][j] == giftLog[j][i]){
                if(giftScore[i] > giftScore[j]){
                    nextMonthGifts[i] ++
                }
            }
        }
    }
    return Math.max(...nextMonthGifts)
}