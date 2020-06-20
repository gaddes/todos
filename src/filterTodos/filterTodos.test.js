import { data } from '../data';
import filterTodos from './filterTodos';

const { tasks } = data;

describe('filterTodos', () => {
  it('filters by correct category', () => {
    // Test 'home' category
    expect(filterTodos(tasks, 'home')).toEqual([
      {
        name: 'laundry',
        checked: false,
        category: 'home',
      },
      {
        name: 'vacuum',
        checked: false,
        category: 'home',
      },
    ]);

    // Test 'work' category
    expect(filterTodos(tasks, 'work')).toEqual([
      {
        name: 'write report',
        checked: false,
        category: 'work',
      },
    ]);
  });

  it('returns an empty array if category does not match', () => {
    expect(filterTodos(tasks, 'foobar')).toEqual([]);
  });
});