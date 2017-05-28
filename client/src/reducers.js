import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import notificationReducer from './components/Notifications/redux/Notifications.reducers';
import navBarReducer from './components/NavBar/redux/NavBar.reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  notifications: notificationReducer,
  navBar: navBarReducer
});

export default rootReducer;
