import {v4} from 'uuid'
import AppDispatcher from '../dispatcher/AppDispatcher'
import EventEmitter from 'events'
// 使用Object.assign方法把EventEmitter.prototype挂载到TodoStore上
const TodoStore = Object.assign({}, EventEmitter.prototype, {
  // 存放所有文章的列表, 里面有两条默认的数据
  todos: [
    {id: v4(), content: 'first one'},
    {id: v4(), content: '2nd one'}
  ],
  getAll() {
    return this.todos
  },
  addTodo(todo) {
    this.todos.push(todo)
  },
  deleteTodo(id) {
    this.todos = this.todos.filter(item => item.id !== id)
  },
  emitChange() {
    this.emit('change')
  },
  addChangeListener(callback) {
    this.on('change', callback)
  },
  removeChangeListener(callback) {
    this.removeListener('change', callback)
  }
})

AppDispatcher.register(action => {
  switch (action.actionType) {
    case 'CREATE_TODO':
      TodoStore.addTodo(action.todo)
      // TodoStore 已经更改, 发送一个广播
      TodoStore.emitChange()
      break
    case 'DELETE_TODO':
      TodoStore.deleteTodo(action.id)
      TodoStore.emitChange()
      break
    default:
      // 默认操作
  }
})

export default TodoStore