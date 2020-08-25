import React, {Component} from 'react'
import PropTypes from 'prop-types'
class CreateButton extends Component {
  render() {
    return (
      <div className="createButtonComponent">
        <button onClick={() => this.props.onClick()}>创建新的Todo</button>
      </div>
    )
  }
}

CreateButton.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default CreateButton