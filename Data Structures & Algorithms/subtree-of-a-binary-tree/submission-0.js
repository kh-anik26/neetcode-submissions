/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class Solution {
    /**
     * @param {TreeNode} s
     * @param {TreeNode} t
     * @returns {boolean}
     */
    isSubtree(s, t) {
        if (!t) return true;
        if (!s) return false;

        if (this.sameTree(s, t)) {
            return true;
        }

        return this.isSubtree(s.left, t) || this.isSubtree(s.right, t);
    }

    /**
     * @param {TreeNode} s
     * @param {TreeNode} t
     * @returns {boolean}
     */
    sameTree(s, t) {
        if (!s && !t) {
            return true;
        }
        if (s && t && s.val === t.val) {
            return (
                this.sameTree(s.left, t.left) &&
                this.sameTree(s.right, t.right)
            );
        }
        return false;
    }
}