/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

class Solution {
    /**
     * @param {NestedInteger[]} nestedList
     * @return {number}
     */
    constructor() {
        this.maxDepth = 0;
        this.total = 0;
    }

    calcMaxDepth(arr, depth) {
        this.maxDepth = Math.max(this.maxDepth, depth);
        for (let item of arr) {
            if (!item.isInteger()) {
                this.calcMaxDepth(item.getList(), depth + 1);
            }
        }
    }

    helper(arr, depth) {
        for (let item of arr) {
            if (!item.isInteger()) {
                this.helper(item.getList(), depth + 1);
            } else {
                this.total += item.getInteger() * (this.maxDepth - depth + 1);
            }
        }
    }

    depthSumInverse(nestedList) {
        this.total = 0;
        this.calcMaxDepth(nestedList, 1);
        this.helper(nestedList, 1);
        return this.total;
    }
}
