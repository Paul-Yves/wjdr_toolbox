import criticals from './criticals';
import charList from './characters';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    criticals, charList
});
export default rootReducer;