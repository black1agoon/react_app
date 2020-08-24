import React, {Component} from 'react'
import {v4} from 'uuid'
import CreateBar from '../CreateBar'
import List from '../List'
import ItemEditor from '../ItemEditor'
import ItemShowLayer from '../ItemShowLayer'
class Deskmark extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          "id": "1111111111111111",
          "title": "Hello",
          "content": "# testing markdown",
          "time": 1458030208359
        }, {
          "id": "2222222222222222",
          "title": "Hello2",
          "content": "# Hello world",
          "time": 1458030208359
        }
      ],
      selectedId: null,
      editing: false
    }
    this.saveItem = this.saveItem.bind(this)
    this.selectItem = this.selectItem.bind(this)
    this.createItem = this.createItem.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
    this.editItem = this.editItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  saveItem(item) {
    // item是编辑器返回的对象, 里面应该包括标题和内容

    // 当前items state
    let items = this.state.items
    item.time = new Date().getTime()

    if (!item.id) {
      item.id = v4()
      items = [...items, item]
    } else {
      items.forEach((it, idx) => {
        if (it.id === item.id) {
          items[idx] = item
        }
      })
    }
    console.log(items)
    this.setState({
      items
    })
  }

  selectItem(id) {

    if (id === this.state.selectedId) {
      return
    }
    this.setState({
      selectedId: id,
      editing: false
    })
  }

  createItem() { //
    this.setState({
      selectedId: null,
      editing: true
    })
  }

  cancelEdit() {
    this.setState({
      selectedId: null,
      editing: false
    })
  }
  editItem(id) {
    this.setState({
      selectedId: id,
      editing: true
    })
  }
  deleteItem(id) {
    let items = this.state.items
    items = items.filter(item => item.id !== id)
    this.setState({
      items
    })
  }

  render() {
    let {items, selectedId, editing} = this.state
    let selected = selectedId && items.find(item => item.id === selectedId)
    // 根据editing状态来决定是要显示ItemEditor组件还是ItemShowLayer组件, 并且将回调方法都传入组件中
    let mainPart = editing ? <ItemEditor item={selected} onSave={this.saveItem} onCancel={this.cancelEdit} /> : <ItemShowLayer item={selected} onEdit={this.editItem} onDelete={this.deleteItem} />
    // 选出当前被选择的文章
    return (
      <section className="deskmark-component">
        <div className="container">
          <div className="row">
            <CreateBar onClick={this.createItem} />
            <List items={items} onSelect={this.selectItem}/>
          </div>
          {mainPart}
        </div>
      </section>
    )
  }
}

export default Deskmark