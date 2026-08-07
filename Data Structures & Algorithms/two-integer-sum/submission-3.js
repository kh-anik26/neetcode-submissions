class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i =0; i , nums.length; i += 1){
            for (let j = 1; j <= nums.length; j += 1){
                if(i !== j && nums[i] + nums[j] === target){
                    return [i,j];
                }
            }
        }
    }
}
