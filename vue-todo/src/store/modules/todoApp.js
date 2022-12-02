const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i=0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          const obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
          arr.push(obj);
        }
        // console.log(localStorage.getItem(localStorage.key));
      }
    }
    return arr;
  }
}

const state = {
  headerText: 'TODO it!',
  todoItems: storage.fetch()
};

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
  getHeaderText(state) {
    return state.headerText;
  }
};

const mutations = {
  addOneItem(state, newTodoItem) {
    const obj = {
      completed: false,
      item: newTodoItem
    }
    localStorage.setItem(newTodoItem, JSON.stringify(obj));
    state.todoItems.push(obj);
  },
  removeOneItem(state, payload) {
    localStorage.removeItem(payload.todoItem);
    state.todoItems.splice(payload.index, 1);
  },
  toggleComplete(state, payload) {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    localStorage.removeItem(payload.todoItem.item);
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
  },
  clearTodo(state) {
    localStorage.clear();
    state.todoItems = [];
  }
};

export default {
  state,
  getters,
  mutations
}
