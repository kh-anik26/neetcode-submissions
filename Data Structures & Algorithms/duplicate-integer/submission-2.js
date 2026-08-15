class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dup = new Set()
        let ans = false
        for(let n of nums){
            if(dup.has(n)) ans = true
            else dup.add(n)
        }
        return ans
    }
}
