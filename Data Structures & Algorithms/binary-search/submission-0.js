class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        nums.sort((a,b) => a -b);

        return nums.indexOf(target)
    }
}
