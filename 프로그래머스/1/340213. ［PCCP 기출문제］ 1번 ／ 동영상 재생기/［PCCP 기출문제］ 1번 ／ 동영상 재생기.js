function solution(video_len, pos, op_start, op_end, commands) {
    // 시간 문자열을 ms로 변환
    const timeToMs = (time) => {
        const [mm,ss] = time.split(':').map(Number);
        return mm * 60 + ss
    }
    
    let currentMs = timeToMs(pos);
    const op_startTimeMs = timeToMs(op_start);
    const op_endTimeMS = timeToMs(op_end);
    const videoTimeMs = timeToMs(video_len);
    
    // ms를 문자열 시간으로 변환
    const resultTimeToMs = (ms) => {
        const mm = Math.floor(ms/60);
        const ss = ms % 60;
        const result = `${mm < 10 ? '0' + mm : mm }:${ss < 10 ? '0' + ss : ss}`
        return result
    }
    
    commands.forEach((item)=>{
        // 구간 체크 
        if(op_startTimeMs <= currentMs && currentMs <= op_endTimeMS){
            currentMs = op_endTimeMS;
        }
        if(item === "next"){
            currentMs = Math.min(videoTimeMs, currentMs + 10)
        } else {
            currentMs = Math.max(0,currentMs - 10)
        }
        // commands가 1개일 경우를 위해 추가
        if(op_startTimeMs <= currentMs && currentMs <= op_endTimeMS){
            currentMs = op_endTimeMS;
        }
    })
    return resultTimeToMs(currentMs)
}