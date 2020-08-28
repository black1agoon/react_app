import {add} from 'actions'
function mapStateToProps(state) {
  return {
    num: state.num
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onBtnClick() {
      dispatch(add())
    }
  }
}

function Counter(props) {
  return (
    <p>
      {props.num}
      <button onClick={props.onBtnClick}> +1 </button>
    </p>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)