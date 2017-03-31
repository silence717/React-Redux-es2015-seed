/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-03-25
 */
import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInprogress from './ajaxStatusReducer';

const rootReducer = combineReducers( {
  courses,
  authors,
  ajaxCallsInprogress
});

export default rootReducer;
