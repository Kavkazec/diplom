import * as actions from './Notifications.actions';

const notificationMiddleware = ({ dispatch }) => next => (action) => {
  if (action.type === actions.ADD_NOTIFICATION) {
    setTimeout(() => dispatch(actions.removeNotification({ id: action.payload.id })), 5000);
  }

  return next(action);
};

export default notificationMiddleware;
