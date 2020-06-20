function filterTodos(allTodoItems, selectedCategory) {
  return allTodoItems.filter(item => item.category === selectedCategory);
}

export default filterTodos;