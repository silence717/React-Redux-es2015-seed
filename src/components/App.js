/**
 * @author  https://github.com/silence717
 * @desc [主入口]
 * @date 2017-03-22
 */
import React, {PropTypes} from 'react';
import Header from './common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header loading={this.props.loading} />
        {this.props.children}
      </div>
    );
  }
}


App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired

};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInprogress > 0
  };
}

export default connect(mapStateToProps)(App);
