function solution(num_list) {
    let mult = 1;
    let sum = 0;
    num_list.map((item)=> sum += item);
    num_list.map((item)=> mult *= item);
    if(mult < (sum*sum)){
        return 1;
    } else return 0;
}