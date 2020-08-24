import React, {Component} from 'react'
import PropTypes from 'prop-types'
class ItemEditor extends Component {
  constructor() {
    super()
    this.title = React.createRef()
    this.contont = React.createRef()
  }
  render() {
    const {onSave, onCancel} = this.props
    const item = this.props.item || {
      title: '',
      content: ''
    }
    // 判断是否已经选择了 selectId, 渲染按钮不同的文本
    let saveText = item.id ? '保存' : '创建'
    // 传入回调包裹方法
    let save = () => {
      onSave({
        ...item,
        // this.refs 可以获取真实的 DOM 节点, 从而取得 value
        title: this.title.current.value,
        content: this.contont.current.value
      })
    }
    return (
      <div className="col-md-8 item-editor-component">
        <div className="control-area">
          <button onClick={() => save()} className="btn btn-success">{saveText}</button>
          <button onClick={() => onCancel()} className="btn btn-danger">取消</button>
        </div>
        <div className="edit-area">
          <input ref={this.title} placeholder="请填写标题" defaultValue={item.title} />
          <textarea ref={this.contont} placeholder="请填写内容" defaultValue={item.content}/>
        </div>
      </div>
    )
  }
}

ItemEditor.propTypes = {
  item: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}
export default ItemEditor