function solution(bandage, health, attacks) {
    
    const lastAttack = attacks[attacks.length-1] 
    const lastAttackTime = lastAttack[0] 
    
    let currentHelath = health; 
    let healCount = 0;
    
    const attackTimeMap = new Map();
    attacks.forEach((item)=>{
      const [attackTime, damage] = item;
      attackTimeMap.set(attackTime,damage)  
    })
    

    for(let i = 1; i <= lastAttackTime; i++) { 
        if(attackTimeMap.get(i)){
            currentHelath -= attackTimeMap.get(i);
            healCount = 0;
            if(currentHelath <= 0){
                return -1;
            }
        } else {
            currentHelath = Math.min(health, currentHelath+bandage[1]);
            healCount ++;
            if(healCount === bandage[0]){
                currentHelath = Math.min(health, currentHelath+bandage[2]);
                healCount = 0;
            }
        }
    }
    return currentHelath;
}