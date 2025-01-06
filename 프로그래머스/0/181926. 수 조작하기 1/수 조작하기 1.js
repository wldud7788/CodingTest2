function solution(n, control) {
    control.split('').forEach((item)=>{
        if(item === "w") n++;
        else if(item === "s") n--;
        else if(item === "d") n+=10;
        else if(item === "a") n -= 10;
    })
    return n;
}