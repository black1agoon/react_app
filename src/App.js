import React from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
    // this.handleClick = this.handleClick.bind(this)  // 方法一 直接bind绑定this
  }
  // handleClick() { // 方法三  回调中使用箭头函数
  //   this.setState(prevState => ({
  //     isToggleOn: !prevState.isToggleOn
  //   }))
  // }
  handleClick = () => { // 方法三  回调中使用箭头函数
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }
  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

export default Toggle
