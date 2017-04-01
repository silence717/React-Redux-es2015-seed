/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-04-01
 */
import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page', () => {
  it ('sets error message when trying to save empty title', () => {
    const props = {
      authors: [],
      actions: {saveCourse: () => { return Promise.resolve(); }},
      id: '', watcHref: '', title: '', authorId: '', length: '', category: ''
    };

    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.');
  });
});
