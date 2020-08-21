import React from 'react'

class BoilingVerdict extends React.Component {
  render() {
    const celsius = this.props.celsius
    const bv = celsius >= 100 ? '<p>The water would boil.</p>' : '<p>The water would not boil.</p>'
    return bv
  }
}

class Test10 extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      temperature: ''
    }
  }
  handleChange(e) {
    this.setState({
      temperature: e.target.value
    })
  }
  render() {
    const temperature = this.state.temperature
    return (
      <div>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingVerdict celsius={parseFloat(temperature)}>
        </BoilingVerdict>
      </div>
    )
  }
}

export default Test10