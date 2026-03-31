class MyStack {
    constructor() {
        this.items=[]
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.items.push(x)
    }

    /**
     * @return {number}
     */
    pop() {
        for (let i=0;i<this.items.length-1;i++){
            let val = this.items.shift()
            this.items.push(val)
        }
        return this.items.shift()
    }

    /**
     * @return {number}
     */
    top() {return this.items[this.items.length-1]}

    /**
     * @return {boolean}
     */
    empty() {return this.items.length === 0}
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
