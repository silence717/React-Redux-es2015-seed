/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-03-25
 */
import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers( {
  courses,
  authors
});

export default rootReducer;
