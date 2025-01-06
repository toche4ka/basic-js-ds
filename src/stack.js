const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
	constructor() {
		//создаем пустой массив для хранения эл-ов
		this.stack = []
	}
	// добавляем эл-т сверху
	push(element) {
		this.stack.push(element)
	}

	// Возвращаем верхний элемент без его удаления
	peek() {
		if (this.stack.length === 0) {
			return undefined;
		}
		return this.stack[this.stack.length - 1];
	}
	// Удаляем и возвращает верхний элемент стека
	pop() {
		if (this.stack.length === 0) {
			return undefined;
		}
		return this.stack.pop();
	}
}

module.exports = {
	Stack
};
