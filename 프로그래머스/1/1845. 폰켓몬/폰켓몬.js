function solution(nums) {
    const selectedCount = nums.length/2;
    const pokemoneTypes = new Set(nums);
    return Math.min(selectedCount,pokemoneTypes.size)
}