class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
           let dup = [];
    for (let num of nums){
        if(dup.includes(num)) {
            return true
        }
        else{
            dup.push(num)
        }
    }
    return false

    }
}
