import React, {Component} from 'react'
import PropTypes from 'prop-types'
const propType = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}
class List extends Component {
  render() {
    let itemList = this.props.items.map(item => (
      <li key={item.id}>
        <button onClick={() => this.props.onDelete(item.id)}>删除</button>
        {item.content}
      </li>
    ))
    return (
      <ul>
        <h2>这是今天的待办事项</h2>
        {itemList}
      </ul>
    )
  }
}
List.propTypes = propType
export default List