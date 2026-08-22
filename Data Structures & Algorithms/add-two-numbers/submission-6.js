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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let cur = dummy;

        let carry = 0;
        while(l1 || l2 || carry){
            let val1 = l1 ? l1.val : null;
            let val2 = l2 ? l2.val : null;
        
            let val = val1 + val2 + carry;
            carry = Math.trunc(val / 10);
            val = val % 10;
            
            cur.next = new ListNode(val);
            cur = cur.next;

            l1 ? l1 = l1.next : l1 = null;
            l2 ? l2 = l2.next : l2 = null;
        }

        return dummy.next;
    }
}
