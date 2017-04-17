/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-04-17
 */
import expect from 'expect';
import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialStore from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () =>{
  it('should handle creating courses', () => {
    // arrange
    const store = createStore(rootReducer, initialStore);
    const course = {
      title: 'Clean Code'
    };
    
    // act
    const action = courseActions.createCourseSuccess(course);
    store.dispatch(action);
    
    // assert
    const actual = store.getState().courses[0];
    const expected = {
      title: 'Clean Code'
    };
    expect(actual).toEqual(expected);
  });
});
