// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let cur = head;
        let prev = null;
        let newHead = null;
        let newNode = null
        let map = new Map();
        while(cur){
            newNode = new Node(cur.val, null, null) // copy primitive value only
            map.set(cur, newNode);
            if(newHead === null) {
                newHead = newNode;
            } else {
                prev.next = newNode;
            }
            prev = newNode;
            cur = cur.next;
        }
        let newCur = newHead;
        cur = head
        while(newCur && cur){
            newCur.random = map.get(cur.random)
            newCur = newCur.next;
            cur = cur.next
        }
        // console.log(map)
        return newHead
    }
}
