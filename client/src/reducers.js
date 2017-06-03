import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import notificationReducer from './components/Notifications/redux/Notifications.reducers';
import navBarReducer from './components/NavBar/redux/NavBar.reducer';
import reviewReducer from './pages/Review/redux/Review.reducer';
import personReducer from './pages/PersonalPage/redux/PersonalPage.reducer';
import galleryReducer from './pages/Gallery/redux/Gallery.reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  notifications: notificationReducer,
  navBar: navBarReducer,
  review: reviewReducer,
  person: personReducer,
  gallery: galleryReducer,
});

export default rootReducer;
