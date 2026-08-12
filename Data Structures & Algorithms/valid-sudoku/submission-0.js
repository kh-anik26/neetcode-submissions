class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = new Map();
        const rows = new Map();
        const squares = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                
                if (val === ".") {
                    continue;
                }

                // Create a string key for the 3x3 sub-box (e.g., "0-1")
                const squareKey = `${Math.floor(r / 3)}-${Math.floor(c / 3)}`;

                // Initialize sets if they don't exist yet
                if (!rows.has(r)) rows.set(r, new Set());
                if (!cols.has(c)) cols.set(c, new Set());
                if (!squares.has(squareKey)) squares.set(squareKey, new Set());

                // Check for duplicates
                if (
                    rows.get(r).has(val) ||
                    cols.get(c).has(val) ||
                    squares.get(squareKey).has(val)
                ) {
                    return false;
                }

                // Add character to respective Sets
                rows.get(r).add(val);
                cols.get(c).add(val);
                squares.get(squareKey).add(val);
            }
        }

        return true;
    }
}
