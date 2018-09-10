import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import {fetchHomeValues} from './../actions/home';

class MainNav extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchHomeValues();
  }

  renderNavBar() {
    return _.map(this.props.mainNav.home.response, data => {
      return (
        <div key={data.id}>{data.value}</div>
      )
    });
  }

  render() {
    return (
      <div>
        {this.renderNavBar()}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {mainNav: state};
}

export default connect(mapStateToProps, {fetchHomeValues})(MainNav);
