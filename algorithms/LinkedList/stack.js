class stack {
    constructor(count = 0) {
        this.count = count;
        this.storage = {};
    }
}
stack.prototype.push = function(item) {
    this.storage[this.counter] = item;
    this.count++;
}
stack.prototype.pop = function() {
    if (this.counter == 0) return 'stack is empty';
    this.counter--;
    this.storage[this.counter] =
};
stack.prototype.pluck = function() {

}