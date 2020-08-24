import React from 'react'
import marked from 'marked'
import PropTypes from 'prop-types'
const propTypes = {
  item: PropTypes.object,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
function ItemShowLayer({item, onEdit, onDelete}) {
  // 如果没有传入Item, 直接返回一些静态的提示
  if (!item || !item.id) {
    return (
      <div className="col-md-8 item-show-layer-component">
        <div className="no-select">请选择左侧列表里面的文章</div>
      </div>
    )
  }
  // 将Markdown 转换成 HTML
  // 注意在渲染 HTML 代码时使用了描述过的JSX转移写法 dangerouslySetInnerHTML
  let content = marked(item.content)
  return (
    <div className="col-md-8 item-show-layer-component">
      <div className="control-area">
        <button className="btn btn-primary" onClick={() => onEdit(item.id)}>编辑</button>
        <button className="btn btn-danger" onClick={() => onDelete(item.id)}>删除</button>
      </div>
      <h2>{item.title}</h2>
      <div className="item-text">
        <div dangerouslySetInnerHTML={{__html: content}} />
      </div>
    </div>
  )
}
ItemShowLayer.propTypes = propTypes
export default ItemShowLayer