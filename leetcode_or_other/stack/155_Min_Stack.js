// my trial 
var MinStack = function() {
    this.stack = [];
    this.min = null;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    this.min = this.min ? this.min : this.getMin();
    this.min = this.min < val ? this.min : val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = this.stack[0];
    this.stack.forEach(val => min = Math.min(min, val));
    return min;
};



