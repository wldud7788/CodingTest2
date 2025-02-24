function solution(myStr) {
    let result = myStr.split("a")
    .flatMap((item)=> item.split("b"))
    .flatMap((item)=> item.split("c"));

    result = result.filter((item)=> item !== "");
    return result.length === 0 ? ["EMPTY"]: result
}