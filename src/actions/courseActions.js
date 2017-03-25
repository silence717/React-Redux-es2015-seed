/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-03-25
 */
import * as types from './actionTypes';

export function createCourse(course) {
  return {type: types.CREATE_COURSE, course};
}
