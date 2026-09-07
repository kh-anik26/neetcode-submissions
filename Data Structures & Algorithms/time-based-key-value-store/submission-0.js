class TimeMap {
    constructor() {
        // key : list of [val, timestamp]
        this.store = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }
        this.store.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let res = "";
        const values = this.store.get(key) || [];

        // binary search
        let l = 0;
        let r = values.length - 1;

        while (l <= r) {
            const m = Math.floor((l + r) / 2);

            if (values[m][1] <= timestamp) {
                res = values[m][0];
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        return res;
    }
}