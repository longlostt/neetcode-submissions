class MinHeap {
    constructor() {
        this.heap = [0]; // [null, 1, 2, 3, ...]
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        // percolate up
        while (i > 1 && this.heap[Math.floor(i / 2)] > this.heap[i]) {
            // parent > val
            let temp = this.heap[Math.floor(i / 2)];
            this.heap[Math.floor(i / 2)] = this.heap[i];
            this.heap[i] = temp;
            i = Math.floor(i / 2);
        }
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.heap.length == 1) return -1;
        if (this.heap.length == 2) return this.heap.pop();

        let res = this.heap[1];
        this.heap[1] = this.heap.pop();
        let i = 1;
        // percolate down
        while (2 * i < this.heap.length) {
            // at least left child exists
            if (
                (2 * i + 1 >= this.heap.length || this.heap[2 * i] <= this.heap[2 * i + 1]) &&
                2 * i < this.heap.length &&
                this.heap[2 * i] < this.heap[i]
            ) {
                let temp = this.heap[2 * i];
                this.heap[2 * i] = this.heap[i];
                this.heap[i] = temp;
                i = 2 * i;
            } else if (2 * i + 1 < this.heap.length && this.heap[2 * i + 1] < this.heap[i]) {
                let temp = this.heap[2 * i + 1];
                this.heap[2 * i + 1] = this.heap[i];
                this.heap[i] = temp;
                i = 2 * i + 1;
            } else {
                break;
            }
        }

        return res;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.heap.length > 1) return this.heap[1];
        return -1;
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.heap = [0,...nums];
        let cur = Math.floor((this.heap.length - 1) / 2);
        while (cur > 0) {
            let i = cur;
            while (2 * i < this.heap.length) {
                // at least left child exists
                if (
                    (2 * i + 1 >= this.heap.length || this.heap[2 * i] <= this.heap[2 * i + 1]) &&
                    this.heap[2 * i] < this.heap[i]
                ) {
                    let temp = this.heap[2 * i];
                    this.heap[2 * i] = this.heap[i];
                    this.heap[i] = temp;
                    i = 2 * i;
                } else if (2 * i + 1 < this.heap.length && this.heap[2 * i + 1] < this.heap[i]) {
                    let temp = this.heap[2 * i + 1];
                    this.heap[2 * i + 1] = this.heap[i];
                    this.heap[i] = temp;
                    i = 2 * i + 1;
                } else {
                    break;
                }
            }
            cur--;
        }
    }
}
