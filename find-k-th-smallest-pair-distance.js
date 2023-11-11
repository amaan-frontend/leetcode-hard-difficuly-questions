
function smallestDistancePair(nums, k) {
    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums[nums.length - 1] - nums[0];

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let count = countPairs(nums, mid);

…
    return count;
}
