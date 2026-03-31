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
     * @return {void}
     */
    reorderList(head) {
        // 1. split in two
        // 2. reverse second list
        // 3. zipper merge 
        let fast = head;
        let slow = head;
        while(fast && fast.next){
            fast = fast.next.next;
            slow = slow.next;
        }
        let secondList = slow.next;
        slow.next = null;
        let prev = null;
        
        while(secondList){ // reverse second list
            let temp = secondList.next;
            secondList.next = prev;
            prev = secondList;
            secondList = temp;
        }

        let first = head;
        let second = prev;
        let count = 0;
        while(first && second){
            let temp1 = first.next;
            let temp2 = second.next;
            first.next = second
            count++;
            if(count % 2){
                second.next = temp1;
                count++;
            }
            first = temp1;
            second = temp2;
        }
    }
}
