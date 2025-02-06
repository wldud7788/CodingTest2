function solution(my_string, indices) {
    const Array = my_string.split('');
    indices.forEach((item)=>{
        Array[item] = ''
    })
    return Array.join('');
}