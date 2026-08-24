class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const s2Count = new Array(26).fill(0);
        const aCode = "a".charCodeAt(0);

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - aCode] += 1;
            s2Count[s2.charCodeAt(i) - aCode] += 1;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            matches += (s1Count[i] === s2Count[i] ? 1 : 0);
        }

        let l = 0;
        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) return true;

            let index = s2.charCodeAt(r) - aCode;
            s2Count[index] += 1;
            if (s1Count[index] === s2Count[index]) {
                matches += 1;
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches -= 1;
            }

            index = s2.charCodeAt(l) - aCode;
            s2Count[index] -= 1;
            if (s1Count[index] === s2Count[index]) {
                matches += 1;
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches -= 1;
            }

            l += 1;
        }

        return matches === 26;
    }
}
