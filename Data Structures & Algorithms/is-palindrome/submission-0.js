class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let l = 0;
        let r = s.length - 1;

        while (l < r) {
            while (l < r && !this.alphaNum(s[l])) {
                l += 1;
            }
            while (r > l && !this.alphaNum(s[r])) {
                r -= 1;
            }

            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }

            l += 1;
            r -= 1;
        }

        return true;
    }
    /**
     * @param {string} c
     * @returns {boolean}
     */
    alphaNum(c) {
        const code = c.charCodeAt(0);
        return (
            (code >= 65 && code <= 90) ||  // 'A' <= c <= 'Z'
            (code >= 97 && code <= 122) || // 'a' <= c <= 'z'
            (code >= 48 && code <= 57)     // '0' <= c <= '9'
        );
    }
}
