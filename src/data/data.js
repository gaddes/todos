export default {
  tasks: [
    {
      name: 'laundry',
      checked: true,
      category: 'home',
    },
    {
      name: 'write report',
      checked: false,
      category: 'work',
    },
    {
      name: 'vacuum',
      checked: false,
      category: 'home',
    },
  ],
  categories: {
    all: ['home', 'work'],
    visible: ['home', 'work'], // Default
  },
};