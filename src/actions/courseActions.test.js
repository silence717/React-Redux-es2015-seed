/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-04-17
 */
import expect from 'expect';
import * as courseActions from './courseActions';
import * as type from './actionTypes';
import thunk from 'redux-thunk';
import nock from 'nock';
import cofigureMockStore from 'redux-mock-store';

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

const middleware = [thunk];
const mockStore = cofigureMockStore(middleware);

describe('Async Actions', () => {
  afterEach( ()=> {
    nock.cleanAll();
  });
  
  it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
    
    const expectedActions = [
      {type: type.BEGIN_AJAX_CALL},
      {type: type.LOAD_COURSES_SUCCESS, body: {courses: [{id: 'clean-code', title: 'Clean Code'}]}}
    ];
    
    const store = mockStore({course: []}, expectedActions);
    store.dispatch(courseActions.loadCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(type.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(type.LOAD_COURSES_SUCCESS);
      done();
    });
    
  });
  
});
