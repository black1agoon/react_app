// 继承
import React from 'react';

const modifyProperty = (WrappedComponent) => class NewComponent extends WrappedComponent {
  render() {
    const element = super.render();
    const newStyle = {
      color: element.type === 'div' ? 'red' : 'green'
    }
    const newProps = {...this.props, style: newStyle}
    return React.cloneElement(element, newProps, element.props.children)
  }
}
export default modifyProperty