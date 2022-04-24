/**
 * @jest-environment jsdom
 */

import { add, deleteItem } from './functionality.js';

jest.mock('./container.js');

const task = [
  {
    index: 0,
    description: 'first',
    completed: true,
  },
];

describe('Add function Tests', () => {
  test('Add one new item to the list', () => {
    add(task);
    const list = document.querySelector('.container');
    expect(list.children).toHaveLength(1);
  });

  test('Modify completed property to false', () => {
    expect(task[0].completed).toEqual(false);
  });
});

describe('RemoveList function Test', () => {
  test('Remove element from DOM', () => {
    const element = document.querySelector('.list-item');
    deleteItem(task, () => {}, element);
    const list = document.querySelector('.container');
    expect(list.children).toHaveLength(0);
  });

  test('Remove element from Task Array', () => {
    expect(task.length).toBeLessThan(1);
  });
});
