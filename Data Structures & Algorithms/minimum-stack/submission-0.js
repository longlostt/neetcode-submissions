class MinStack {
    constructor() {
        this.items = []
        this.minItems = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val)
        if(this.minItems.length === 0) {
            this.minItems.push(val)
        } else {
            this.minItems.push(Math.min(val,this.minItems[this.minItems.length-1]))
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.items.pop()
        this.minItems.pop()
    }

    /**
     * @return {number}
     */
    top() {
        if(this.items.length === 0) {
            return "Stack is empty"
        }
        return this.items[this.items.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minItems[this.minItems.length-1]
    }
}