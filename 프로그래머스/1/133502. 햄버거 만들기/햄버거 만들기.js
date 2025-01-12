function solution(ingredient) {
    const hamburger = "1231";
    let compareArray = [];
    let count = 0;
    ingredient.forEach((item)=>{
        compareArray.push(item);
        if(compareArray.length >= 4){
            let str = compareArray.slice(-4).join('');
            if( str === "1231"){
                for(let i = 0; i < 4; i++){
                    compareArray.pop();
                }
                count ++;
            }
        }
    })
    return count;
}