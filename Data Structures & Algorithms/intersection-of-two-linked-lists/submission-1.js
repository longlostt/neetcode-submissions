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
        let setB = new Set();
        let b = headB;
        while(b){
            setB.add(b);
            b=b.next;
        }
        while(headA){
            if(setB.has(headA)) return headA;
            headA = headA.next;
        }
        return null;
    }
}
