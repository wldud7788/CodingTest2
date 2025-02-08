function solution(n, slicer, num_list) {
    switch(n){
        case 1 : {
            return num_list.slice(0,slicer[1]+1)
        }
        case 2 : {
            return num_list.slice(slicer[0])
        }
        case 3 : {
            return num_list.slice(slicer[0],slicer[1]+1)
        }
        case 4 : {
            const result = [];
            const slicedArray = num_list.slice(slicer[0],slicer[1]+1)
            for(let i = 0; i < slicedArray.length; i+= slicer[2]){
                result.push((slicedArray[i]))
            }
            return result
        }
        default : return [];
    }
}