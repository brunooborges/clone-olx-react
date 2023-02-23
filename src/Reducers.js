import { combineReducers } from 'redux';
import UserReducer from './reducers/UserReducer';

export default combineReducers({
	user: UserReducer,
});
