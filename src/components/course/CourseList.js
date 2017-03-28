/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-03-28
 */
import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses}) =>{
  return (
    <table className="table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Title</th>
          <th>Author</th>
          <th>Category</th>
          <th>Length</th>
        </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow key={course.id} course={course}/>
      )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  course: PropTypes.array.isRequired
};

export default CourseList;
