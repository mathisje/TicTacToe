import { connect } from 'react-redux'
import { placeMark } from '../actions'
import BoardSquare from './BoardSquare'

const mapStateToProps = (state, ownProps) => {
  return {
    square: state.board[ownProps.row][ownProps.column]
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    placeMarkHandler: (squareId) => {
      dispatch(placeMark(squareId))
    }
  }
};

const SquareContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardSquare);

export default SquareContainer;