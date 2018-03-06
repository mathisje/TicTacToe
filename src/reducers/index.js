import { initialState } from './initialState'

const rootReducer = (state = { ...initialState }, action) => {
  if (action.type === 'PLACE_MARK') {
    console.log('PLACE_MARK' + action.squareId);
    return state;
  }
  else if (action.type === 'RESET_GAME') {
    console.log('RESET_GAME');
    return { ...initialState };
  }
  else {
    return state;
  }
};

export default rootReducer;