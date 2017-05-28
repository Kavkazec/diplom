import uuid from 'node-uuid';

export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

export const addNotification = ({ title, message, type }) => {
  const id = uuid.v4();
  return {
    type: ADD_NOTIFICATION,
    payload: {
      title,
      message,
      type,
      id,
    },
  };
};

export const removeNotification = ({ id }) => ({
  type: REMOVE_NOTIFICATION,
  payload: {
    id,
  },
});
