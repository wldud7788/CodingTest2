function solution(myString, pat) {
    const lowerMyString = myString.toLowerCase();
    const lowerPat = pat.toLowerCase();
    
    if(myString.length < pat.length) return 0;
    return lowerMyString.includes(lowerPat) ? 1 : 0;
}