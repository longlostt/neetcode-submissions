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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let curr;

        if (!list1) return list2;
        if (!list2) return list1;

        if (list1.val >= list2.val) {
            curr = list2;
            list2 = list2.next;
        } else {
            curr = list1;
            list1 = list1.next
        }

        let head = curr;

        while (list1 && list2) {
            if (list1.val >= list2.val) {
                curr.next = list2;
                list2 = list2.next;
            } else {
                curr.next = list1;
                list1 = list1.next;
            }
            curr = curr.next;
        }
        list1 ? curr.next = list1 : curr.next = list2;
        return head;
    }
}
