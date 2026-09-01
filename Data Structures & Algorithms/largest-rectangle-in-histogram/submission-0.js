class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const stack = []; // pair: [index, height]

        for (let i = 0; i < heights.length; i++) {
            const h = heights[i];
            let start = i;

            while (stack.length > 0 && stack[stack.length - 1][1] > h) {
                const [index, height] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - index));
                start = index;
            }

            stack.push([start, h]);
        }

        for (const [i, h] of stack) {
            maxArea = Math.max(maxArea, h * (heights.length - i));
        }

        return maxArea;
    }
}
