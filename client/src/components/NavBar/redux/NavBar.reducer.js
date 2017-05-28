import * as actions from './NavBar.actions';

const initialState = {
  isChartOpen: false,
  isToolsOpen: false
};

function setFadeState(state, { isChartOpen }) {
  return Object.assign({}, state, {
    ...state,
    isChartOpen,
  });
}

function setToolsState(state, { isToolsOpen }) {
  return Object.assign({}, state, {
    ...state,
    isToolsOpen,
  });
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_FADE_STATE:
      return setFadeState(state, action);
    case actions.CHANGE_TOOLS_STATE:
      return setToolsState(state, action);
    default:
      return state;
  }
}

export default reducer;
