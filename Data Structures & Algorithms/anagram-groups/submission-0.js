class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = {}
        for(let str of strs){
            let key = str.split("").sort().join("");
            if(!hash[key]){
                hash[key] = []
            }
            hash[key].push(str)
        }
        let result = Object.values(hash)
        return result
    }
}
