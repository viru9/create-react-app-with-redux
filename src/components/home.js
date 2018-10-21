import React, {Component} from 'react';
import MainNav from './main_nav';
import {connect} from 'react-redux';
import AlertModel from './common/alert';
import { Button } from 'reactstrap';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show_alert: false
    }
  }

  buttonClicked() {
    this.setState({show_alert: true});
    setTimeout(() => {
      this.setState({show_alert: false})
    }, 1000);
  }


  render() {
    return (
      <div>
        <MainNav/>
        <AlertModel show_alert={this.state.show_alert}/>
        <Button outline color="primary" onClick={this.buttonClicked.bind(this)}>Open Alert</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {home: state};
}

export default connect(mapStateToProps, {})(Home);
