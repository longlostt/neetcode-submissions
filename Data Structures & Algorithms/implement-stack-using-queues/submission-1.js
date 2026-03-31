class MyStack {
    constructor() {
        this.items=[]
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        if (this.items.length <= 0){
            this.items.push(x)
        } else {
            this.items.splice(0,0,x)
        }
    }

    /**
     * @return {number}
     */
    pop() {return this.items.shift()}

    /**
     * @return {number}
     */
    top() {return this.items[0]}

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
