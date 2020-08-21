import React, {Component} from 'react'

class Demo10 extends Component {
  constructor() {
    super()
    this.state = {
      opacity: 1
    }
  }
  componentDidMount() {
    setInterval(() => {
      var opacity = this.state.opacity
      opacity -= 0.05
      if (opacity < 0.1) {
        opacity = 1
      }
      this.setState({
        opacity
      })
    }, 100)
  }

  render() {
    return (
      <div>
        <p style={{opacity: this.state.opacity}}>我要变啦</p>
      </div>
    )
  }
}

export default Demo10