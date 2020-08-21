import React from 'react'
import './assets/stylus/index.styl'

class Test1 extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5]
    const listItems = numbers.map((number) =>
      <li key={number}>{number}</li>
    )
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}

export default Test1