import { connect } from 'react-redux'
import { placeMark } from '../actions'
import Board from './Board'

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    placeMarkHandler: (square) => {
      dispatch(placeMark(square))
    }
  }
};

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardContainer;