import { connect } from 'react-redux'
import { placeMark } from '../actions'
import Winner from './Winner'

const mapStateToProps = (state) => {
  return {
    winner: state.winner
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    placeMarkHandler: (square) => {
      dispatch(placeMark(square))
    }
  }
};

const WinnerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Winner);

export default WinnerContainer;