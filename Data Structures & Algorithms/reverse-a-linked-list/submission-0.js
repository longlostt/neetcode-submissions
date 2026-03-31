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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let next = null;
        

        while (head !== null){
            next = head.next; // store temp for traversal
            head.next = prev; // reverse
            prev = head; // increment prev to reverse 
            head = next; // traverse 
        }
        return prev;
    }
}
