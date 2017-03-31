/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-03-31
 */
import * as types from './actionTypes';

export function beginAjaxCall() {
  return {type: types.BEGIN_AJAX_CALL};
}

export function ajaxCallError() {
  return {type: types.AJAX_CALL_ERROR};
}
