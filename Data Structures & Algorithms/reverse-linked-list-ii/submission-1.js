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
     * @param {ListNode} head
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        let dummy = new ListNode();
        dummy.next = head;
        let before = dummy; // node bofore 'left'

        for(let i = 1; i < left; i++){
            before = before.next;
        }
        let curr = before.next;
        for(let i = 0; i < right-left; i++){
            let nth = curr.next;
            curr.next = nth.next;
            nth.next = before.next;
            before.next = nth;
        }
        return dummy.next;
        
    }
}
