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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        // 1. reverse
        // 2. remove
        // 3. reverse
    
        let prev = null;
        while(head){
            let temp = head.next;
            head.next = prev;
            prev = head;
            head = temp;
        }

        let reverseHead = prev;
        let cur = reverseHead;
        
        if (n === 1) {
            reverseHead = reverseHead.next;
        } else{
        for(let i = 1; i<n-1; i++){
            cur = cur.next;
        }
        // reverseHead is one node before removal
        cur.next = cur.next.next; 
        }
        let prevReverse = null;
        head = reverseHead;
        while(head){
            let temp = head.next;
            head.next = prevReverse;
            prevReverse = head;
            head = temp;
        }
        return prevReverse;
    }
}
