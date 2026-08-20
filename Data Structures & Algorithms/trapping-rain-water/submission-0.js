class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if(!height) return 0;
        let l = 0;
        let r = height.length - 1;
        let leftMax = height[l];
        let rightMax = height[r];
        let result = 0;
        while(l < r){
            if (leftMax < rightMax){
                l += 1;
                leftMax = Math.max(leftMax, height[l]);
                result += leftMax - height[l];
            }
            else{
                r -= 1;
                rightMax = Math.max(rightMax, height[r]);
                result += rightMax - height[r];
            }
        }
        return result;
    }
}
