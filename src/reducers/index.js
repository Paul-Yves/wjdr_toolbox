import criticals from './criticals';
import charList from './characters';
import trade from './trade'
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    criticals, charList, trade
});
export default rootReducer;