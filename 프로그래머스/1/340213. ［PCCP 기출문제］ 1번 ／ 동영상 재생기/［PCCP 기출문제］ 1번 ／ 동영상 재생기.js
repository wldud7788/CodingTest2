function solution(video_len, pos, op_start, op_end, commands) {
    const [mm,ss] = pos.split(':');
    let currentMs = Number(mm)* 60 + Number(ss);
    
    const [op_start_mm, op_start_ss] = op_start.split(':');
    const op_startTime = Number(op_start_mm)* 60 + Number(op_start_ss); 
    
    const [op_end_mm, op_end_ss] = op_end.split(':');
    const op_endTime = Number(op_end_mm)* 60 + Number(op_end_ss);
    
    const [video_len_mm, video_len_ss] = video_len.split(':');
    const videoTime = Number(video_len_mm)* 60 + Number(video_len_ss);
    
    commands.forEach((item)=>{
        if(op_startTime <= currentMs && currentMs <= op_endTime){
            currentMs = op_endTime;
        }
        if(item === "next"){
            currentMs = Math.min(videoTime, currentMs + 10)
        } else {
            currentMs = Math.max(0,currentMs - 10)
        }
        if(op_startTime <= currentMs && currentMs <= op_endTime){
            currentMs = op_endTime;
        }
    })
    const resultMm = Math.floor(currentMs / 60);
    const resultSs = currentMs % 60;
    
    const [result_mm, result_ss] = [Math.floor(currentMs / 60),currentMs % 60]
    return `${result_mm < 10 ? '0' + result_mm : result_mm}:${result_ss < 10 ? '0' + result_ss : result_ss}`;
}