/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-03-22
 */
import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Admin</h1>
        <p>React, Redux and React Router in ES6</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    );
  }
}

export default HomePage;
