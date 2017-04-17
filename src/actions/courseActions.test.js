/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-04-17
 */
import expect from 'expect';
import * as courseActions from './courseActions';
import * as type from './actionTypes';

// Test a sync action
describe('Course Actions', () => {
  describe('createCourseSuccess', () => {
    it('should create a CREATE_COURSE_SUCCESS action', () => {
      // arrange
      const course = {id: 'clean-code', title: 'Clean Code'};
      const expectedAction = {
        type: type.CREATE_COURSE_SUCCESS,
        course: course
      };
      
      // act
      const action = courseActions.createCourseSuccess(course);
      
      // assert
      expect(action).toEqual(expectedAction);
    });
  });
});
