import { initialState } from './initialState'

const rootReducer = (state = { ...initialState }, action) => {
  if (action.type === 'PLACE_MARK') {
    return state;
  }
  else if (action.type === 'RESET_GAME') {
    return { ...initialState };
  }
  else {
    return state;
  }
};

export default rootReducer;