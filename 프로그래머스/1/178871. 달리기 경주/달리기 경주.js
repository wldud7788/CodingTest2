function solution(players, callings) {
    // map으로 선수이름과 인덱스 저장
    const playersIndex = new Map();
    players.forEach((player,idx) => playersIndex.set(player,idx));
    
    for(let i = 0; i<callings.length; i++){
        const idx = playersIndex.get(callings[i]);
        const calledPlayer = players[idx];
        const frontPlayer = players[idx-1];
        
        players[idx-1] = calledPlayer;
        players[idx] = frontPlayer;
        
        playersIndex.set(frontPlayer,idx);
        playersIndex.set(calledPlayer,idx-1)
    }
    return players;
}