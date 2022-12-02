const addOneItem = (state, newTodoItem) => {
  const obj = {
    completed: false,
    item: newTodoItem
  }
  localStorage.setItem(newTodoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
}
const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem);
  state.todoItems.splice(payload.index, 1);
}

const toggleComplete = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearTodo = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleComplete, clearTodo }
