function solution(names) {
    const slicedArray = [];
    names.forEach((item,idx)=>{
        if(idx % 5 === 0){
            slicedArray.push(item)
        }
    })
    return slicedArray
}