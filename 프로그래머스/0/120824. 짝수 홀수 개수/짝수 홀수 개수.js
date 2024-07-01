function solution(num_list) {
    var answer = [0,0];
    answer[0] = 0;
    cnt = 0;
    cnt2 = 0;
    
    for (var i= 0; i < num_list.length; i++){
        if(num_list[i]%2 == 0){
            cnt++
            answer[0] = cnt;
        }
        else {
            cnt2++
            answer[1] = cnt2;
        }
    }
    return answer;
}