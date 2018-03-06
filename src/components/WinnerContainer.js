import { connect } from 'react-redux'
import Winner from './Winner'

const mapStateToProps = (state) => {
  return {
    winner: state.winner
  }
};

const WinnerContainer = connect(
  mapStateToProps
)(Winner);

export default WinnerContainer;