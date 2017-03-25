/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-03-25
 */
import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers( {
  courses
});

export default rootReducer;
