/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-03-25
 */
import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

    default:
      return state;
  }
}
