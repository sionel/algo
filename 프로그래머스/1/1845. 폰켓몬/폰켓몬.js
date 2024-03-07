function solution(nums) {
    var answer = 0;
    let select = nums.length / 2
    const set = new Set(nums)
    return Math.min(select , set.size);
}