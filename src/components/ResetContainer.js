import { connect } from 'react-redux'
import { resetGame } from '../actions'
import ResetButton from './ResetButton'

const mapStateToProps = (state) => {
  return {
    reset: null
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetGameHandler: () => {
      dispatch(resetGame())
    }
  }
};

const ResetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetButton);

export default ResetContainer;