class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const seen = new Map();
        for(let n of nums){
            seen.set(n, (seen.get(n) || 0) + 1)
        }
        let topKVals = Array.from(seen.entries()).sort((a,b) => b[1] -           a[1]).slice(0,k)
        let topKSet = new Set(topKVals.map(e => e[0]))
        let byAdd = []
        for (let key of seen.keys()) {
            if (topKSet.has(key)) {
                byAdd.append ? byAdd.push(key) : byAdd.push(key);
            }
        }
    return byAdd;
    }
}
