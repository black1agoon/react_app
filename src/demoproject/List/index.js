import React from 'react'
import ListItem from '../ListItem'

function List({items, onSelect}) {
  // 循环插入子组件
  items = items.map(
    item => (
      <ListItem item={item} onClick={onSelect} key={item.id} />
    )
  )
  return (
    <div className="list-component col-md-4 list-group">
      {items}
    </div>
  )
}

export default List