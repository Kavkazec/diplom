import * as actions from './Notifications.actions';

function addNotification(state, payload) {
  return [...state, payload];
}

function removeNotification(state, { id }) {
  const index = state.findIndex(item => item.id === id);
  if (index === -1) return state;

  return [
    ...state.slice(0, index),
    ...state.slice(index + 1),
  ];
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.ADD_NOTIFICATION: return addNotification(state, action.payload);
    case actions.REMOVE_NOTIFICATION: return removeNotification(state, action.payload);
    default: return state;
  }
}
