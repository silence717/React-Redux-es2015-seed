/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-03-25
 */
import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      state.push(action.course);
      return [...state,
        Object.assign({}, action.course)
      ];

    default:
      return state;
  }
}
