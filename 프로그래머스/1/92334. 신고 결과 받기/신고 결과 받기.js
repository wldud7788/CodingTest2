function solution(id_list, report, k) {
    const mailCount = {}
    const reportList = {};
    
    id_list.forEach((user)=>{
        mailCount[user] = 0;
        reportList[user] = new Set();
    });
    
    report.forEach((item)=>{
        [reporter, reported] = item.split(' ');
        reportList[reported].add(reporter)
    })
    
    id_list.forEach((user)=>{
        if(reportList[user].size >= k){
            reportList[user].forEach((reporter)=>{
                mailCount[reporter] ++;
            })
        }
    })
    
    return id_list.map((item)=>mailCount[item])
}