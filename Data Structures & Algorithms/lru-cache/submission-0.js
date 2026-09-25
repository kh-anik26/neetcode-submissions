class Node {
    /**
     * @param {number} key
     * @param {number} val
     */
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cap = capacity;
        this.cache = new Map(); // map key to node

        // left=LRU, right=most recent
        this.left = new Node(0, 0);
        this.right = new Node(0, 0);
        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * remove node from list
     * @param {Node} node
     * @return {void}
     */
    remove(node) {
        const prev = node.prev;
        const nxt = node.next;
        prev.next = nxt;
        nxt.prev = prev;
    }

    /**
     * insert node at right
     * @param {Node} node
     * @return {void}
     */
    insert(node) {
        const prev = this.right.prev;
        const nxt = this.right;
        prev.next = node;
        nxt.prev = node;
        node.next = nxt;
        node.prev = prev;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
            this.insert(this.cache.get(key));
            return this.cache.get(key).val;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            this.remove(this.cache.get(key));
        }
        this.cache.set(key, new Node(key, value));
        this.insert(this.cache.get(key));

        if (this.cache.size > this.cap) {
            // remove from the list and delete the LRU from the hashmap
            const lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }
    }
}