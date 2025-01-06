function solution(num_list) {
    let lastElement = num_list[num_list.length-1];
    let secontLastElement = num_list[num_list.length-2];
    
    if(lastElement > secontLastElement){
        num_list.push(lastElement-secontLastElement);
    } else num_list.push(lastElement*2);
    return num_list;
}