class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let dup = new Set()
        for(let n of nums){
            if(dup.has(n)) return true
            else dup.add(n)
        }
        return false
    }
}
