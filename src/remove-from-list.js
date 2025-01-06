const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
	constructor(x) {
		this.value = x;  // Значение узла
		this.next = null; // Ссылка на следующий узел
	}
}

function removeKFromList(l, k) {
	// Удаляем все узлы, начиная с головы, которые равны k
	while (l !== null && l.value === k) {
		// Перемещаем голову на следующий элемент
		l = l.next;
	}
	// Начинаем обход с головы
	let current = l;

	// Обрабатываем остальные элементы списка
	while (current !== null && current.next !== null) {
		if (current.next.value === k) {
			// Пропускаем узел со значением k
			current.next = current.next.next;
		} else {
			// Переходим к следующему узлу
			current = current.next;
		}
	}
	// Возвращаем новый список
	return l;
}

module.exports = {
	removeKFromList
};
