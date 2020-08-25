import AppDispatcher from '../dispatcher/AppDispatcher'

const TodoAction = {
  // 用一个函数包裹 AppDispatcher.dispatch 方法
  create(todo) {
    AppDispatcher.dispatch({
      actionType: 'CREATE_TODO',
      todo
    })
  },
  delete(id) {
    AppDispatcher.dispatch({
      actionType: 'DELETE_TODO',
      id
    })
  }
}

export default TodoAction