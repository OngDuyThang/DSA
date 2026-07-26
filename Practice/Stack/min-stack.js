var MinStack = function () {
    this.stack = []
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.stack.push(val)

    const latestMin = this.minStack[this.minStack.length - 1]
    if (latestMin === undefined || val <= latestMin) {
        this.minStack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const popped = this.stack.pop()
    const latestMin = this.minStack[this.minStack.length - 1]

    if (popped === latestMin) {
        this.minStack.pop()
    }
    return popped
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]
};

const minStack = new MinStack()
minStack.push(0)
minStack.push(1)
minStack.push(0)
console.log(minStack.stack)
console.log(minStack.minStack)
