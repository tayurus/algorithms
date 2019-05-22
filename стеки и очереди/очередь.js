/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = new Array(k).fill(-1);
  this.maxSize = k;
  this.head = 0;
  this.tail = 0;
  this.size = 0;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (!this.isFull()) {
    this.queue[this.tail] = value;
    this.tail++;
    this.tail = this.tail % this.maxSize;
    this.size++;
    return true;
  }

  return false;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {

  if (!this.isEmpty()) {
    this.queue[this.head] = -1;
    this.head++;
    this.head = this.head % this.maxSize;
    this.size--;
    return true;
  }

  return false;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this.queue[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.tail === 0)
    return this.queue[this.maxSize - 1];

  return this.queue[this.tail - 1];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.size === 0;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.size === this.maxSize;
};

var obj = new MyCircularQueue(8)
console.log(obj.enQueue(3))
console.log(obj.enQueue(9))
console.log(obj.enQueue(5))
console.log(obj.enQueue(0))
console.log(obj.deQueue())
console.log(obj.deQueue())
console.log(obj.isEmpty())
console.log(obj.isEmpty())
console.log(obj.Rear())
console.log(obj.Rear())
console.log(obj.deQueue())
