function solution(num_list) {
    if(num_list.length > 10){
        let sum = 0;
        num_list.map((item)=> sum += item);
        return sum;
 
    } else {
        let result = 1;
        return num_list.reduce((a,b)=>a*b);   }
}