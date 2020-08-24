import React, {Component} from 'react'

class Demo9 extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  render() {
    // const value = this.state.value
    return (
      <div>
        <input type="text" onChange={(e) => this.handleChange(e)}/>
        <p>{this.state.value}</p>
      </div>
    )
  }
}

export default Demo9