const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	getUnderlyingList() {
		return this.head;
	}
	// Добавляем элемент в конец очереди
	enqueue(value) {
		const newNode = new ListNode(value)
		if (!this.head) {
			// Если очередь пуста, и голова, и хвост указывают на новый узел
			this.head = newNode;
			this.tail = newNode;
		} else {
			// Добавляем узел в конец очереди
			this.tail.next = newNode;
			this.tail = newNode; // Обновляем хвост
		}
	}
	// Удаляем и возвращаем первый элемент из очереди
	dequeue() {
		if (!this.head) {
			// Если очередь пуста, возвращаем undefined
			return undefined;
		}

		const removedValue = this.head.value; // Сохраняем значение первого элемента
		this.head = this.head.next; // Перемещаем голову на следующий узел

		if (!this.head) {
			// Если очередь стала пустой, сбрасываем хвост
			this.tail = null;
		}
		return removedValue; // Возвращаем удаленное значение
	}
}

module.exports = {
	Queue
};
