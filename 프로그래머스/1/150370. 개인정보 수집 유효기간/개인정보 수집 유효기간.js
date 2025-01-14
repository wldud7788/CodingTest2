function solution(today, terms, privacies) {
    // 오늘날짜를 일수로 변환
    const [year, month, date] = today.split('.').map((item)=>Number(item))
    const todayDates = year * 12 * 28 + month * 28 + date
    
    // 타입과 유효기간 달을 map객체로 저장
    const invalidatePeriod = new Map();
    terms.forEach((item)=>{
        const [key,value] = item.split(' ');
        // 일수로 변환하여 map에 저장
        invalidatePeriod.set(key, value * 28);
    })
    let answer = [];
    privacies.forEach((item,idx)=>{
        const [cDates, type] = item.split(' ');
        const [cYear, cMonth, cDate] = cDates.split('.').map((item)=>Number(item))
        
        // 수집 날짜를 일수로 변환
        const CollectionDate = cYear * 12 * 28 + cMonth * 28 + cDate;
        
        const expirationDates = CollectionDate + invalidatePeriod.get(type)

        if(expirationDates <= todayDates){
            answer.push(idx+1)
        }
    })
    return answer;
}