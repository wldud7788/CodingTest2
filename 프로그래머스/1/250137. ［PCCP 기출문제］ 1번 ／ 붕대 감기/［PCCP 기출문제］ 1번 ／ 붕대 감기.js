function solution(bandage, health, attacks) {
    
    const 공격마지막 = attacks[attacks.length-1] 
    const 마지막공격시간 = 공격마지막[0] 
    
    let 공격받은후체력 = health; 
    let 연속카운트 = 0;
    
    const 공격시간맵 = new Map();
    attacks.forEach((item)=>{
      const [공격시간, 피해량] = item;
      공격시간맵.set(공격시간,피해량)  
    })
    

    for(let i = 1; i <= 마지막공격시간; i++) { 
        if(공격시간맵.get(i)){
            공격받은후체력 -= 공격시간맵.get(i);
            연속카운트 = 0;
            if(공격받은후체력 <= 0){
                return -1;
            }
        } else {
            공격받은후체력 = Math.min(health, 공격받은후체력+bandage[1]);
            연속카운트 ++;
            if(연속카운트 === bandage[0]){
                공격받은후체력 = Math.min(health, 공격받은후체력+bandage[2]);
                연속카운트 = 0;
            }
        }
    }
    return 공격받은후체력;
}