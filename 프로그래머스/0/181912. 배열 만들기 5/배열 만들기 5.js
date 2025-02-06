function solution(intStrs, k, s, l) {
    const newArray = intStrs.map((item)=>{
        return Number(item.substring(s,s+l))
    })
    return newArray.filter((item)=>item > k)
}