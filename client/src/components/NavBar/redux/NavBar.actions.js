export const CHANGE_FADE_STATE = 'CHANGE_FADE_STATE';
export const CHANGE_TOOLS_STATE = 'CHANGE_TOOLS_STATE';

export const setFadeState = ({ isChartOpen }) => (dispatch) => {
  dispatch({ type: CHANGE_FADE_STATE, isChartOpen });
};

export const setToolsState = ({ isToolsOpen }) => (dispatch) => {
  dispatch({ type: CHANGE_TOOLS_STATE, isToolsOpen });
};
