import React, {Component} from 'react'
import {v4} from 'uuid'
import TodoAction from '../actions/TodoAction'
import List from './List'
import CreateButton from './CreateButton'
import TodoStore from '../stores/TodoStore'
/*
  1. 引入 import { Dispatcher } from 'flux' 获得 new Dispatcher() === AppDispatcher
  2. 通过 AppDispatcher  dispatch 事件
  3. 组件中事件中调用 (触发dispatch
  4. 通过TodoStore中 注册dispatch的事件
  5. 当数据发生改变时, emit('change') 调用setState改变view
 */
class Todo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: TodoStore.getAll()
    }
    this.createTodo = this.createTodo.bind(this)
    this.deleteTodo = this.deleteTodo.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  createTodo() {
    // 创建Todo的事件回调
    TodoAction.create({id: v4(), content: '3rd stuff'})
  }
  deleteTodo(id) {
    TodoAction.delete(id)
  }
  onChange() {
    // store改变后触发的回调, 用setState来更新整个UI
    this.setState({
      todos: TodoStore.getAll()
    })
  }

  componentDidMount() {
    TodoStore.addChangeListener(this.onChange)
  }
  componentWillUnmount() {
    TodoStore.removeChangeListener(this.onChange)
  }
  render() {
    return (
      <div>
        <List items={this.state.todos} onDelete={this.deleteTodo}/>
        <CreateButton onClick={this.createTodo} />
      </div>
    )
  }
}

export default Todo