import { combineReducers } from 'redux';
import userReducer from '../ducks/user';


const rootReducer = combineReducers({
	auth: userReducer,

});

export default rootReducer;
