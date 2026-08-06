class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }else{
            let S = s.split('').sort();
            let T = t.split('').sort()
            for(let i = 0; i < S.length; i += 1){
                if(S[i] !== T[i]){
                    return false
                }
            }
            return true
        }            
    }
}