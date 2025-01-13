function solution(food) {
    let left = "", right = "";
    for(let i = 1; i < food.length; i++){
        let repeatCount = food[i]/2;
        left += i.toString().repeat(repeatCount);
        right = i.toString().repeat(repeatCount) + right;
    }
    return left + "0" + right
}