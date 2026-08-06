class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
           let index = 0;
    for (let i = 0; i < nums.length; i+=1){
        for (let j = 0; j <nums.length; j++){
            if (nums[i] === nums[j]){
                index += 1;
            }
        }
        if(index === 1){
            index =0;
        }
            else{
        break;
    }
    }
        if (index >= 2){
            return true;
        }
        else{
            return false;
        }
    
    }
}
