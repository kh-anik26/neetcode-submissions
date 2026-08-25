class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";

        const countT = new Map();
        const window = new Map();

        for (const c of t) {
            countT.set(c, (countT.get(c) || 0) + 1);
        }

        let have = 0;
        const need = countT.size;
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            const c = s[r];
            window.set(c, (window.get(c) || 0) + 1);

            if (countT.has(c) && window.get(c) === countT.get(c)) {
                have += 1;
            }

            while (have === need) {
                // Update our result
                if ((r - l + 1) < resLen) {
                    res = [l, r];
                    resLen = r - l + 1;
                }

                // Pop from the left of our window
                window.set(s[l], window.get(s[l]) - 1);
                if (countT.has(s[l]) && window.get(s[l]) <              countT.get(s[l])) {
                    have -= 1;
                }
                l += 1;
            }
        }

        const [start, end] = res;
        return resLen !== Infinity ? s.substring(start, end + 1) : "";
    }
}
