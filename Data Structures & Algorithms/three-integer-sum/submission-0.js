class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = [];
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length; i++) {
            const a = nums[i];

            // Skip duplicate values for the first element
            if (i > 0 && a === nums[i - 1]) {
                continue;
            }

            let l = i + 1;
            let r = nums.length - 1;

            while (l < r) {
                const threeSum = a + nums[l] + nums[r];

                if (threeSum > 0) {
                    r -= 1;
                } else if (threeSum < 0) {
                    l += 1;
                } else {
                    res.push([a, nums[l], nums[r]]);
                    l += 1;
                    
                    // Skip duplicates for the second element
                    while (nums[l] === nums[l - 1] && l < r) {
                        l += 1;
                    }
                }
            }
        }

        return res;
    }
}
