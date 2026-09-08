class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let n = [...nums1, ...nums2];
        n.sort((a,b) => a -b);
        let median = 0;
        if(n.length % 2 === 0){
            median = (n[n.length / 2] + n[n.length / 2 - 1]) / 2;
        }else{
            median = n[Math.floor(n.length / 2)];
        }
        return median;
    }
}
