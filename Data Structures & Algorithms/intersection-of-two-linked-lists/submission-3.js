/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
    /**
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        let a = headA;
        let b = headB;
        while (a || b) {
            if (a == b) return a;
            if (!a) {
                a = headA;
            } else {
                a = a.next;
            }
            if (!b) {
                b = headB;
            } else {
                b = b.next;
            }
        }
        return null;
    }
}
