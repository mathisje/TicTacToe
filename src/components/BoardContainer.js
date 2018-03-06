import { connect } from 'react-redux'
import Board from './Board'

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
};

const BoardContainer = connect(
  mapStateToProps
)(Board);

export default BoardContainer;