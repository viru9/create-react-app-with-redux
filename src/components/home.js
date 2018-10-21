import React, {Component} from 'react';
import MainNav from './main_nav';
import {connect} from 'react-redux';
import AlertModel from './common/alert';
import { Button } from 'reactstrap';
import {fetchHomeValues} from './../actions/home';
import _ from 'lodash';

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

  componentDidMount(){
    this.props.fetchHomeValues(() => {
console.log('fetchHomeValues: ',this.props.home);
    });
  }

  renderTable(){
    if(this.props.home.home.length>0){
      return _.map(this.props.home.home, (data,index) => {
        if(index < 200){
          return (
            <div key={data.id}>{data.title}</div>
          )
        }
      });
    }
    else {
      return (
        <div>Loading....</div>
      )
    }

  }


  render() {
    return (
      <div>
        <MainNav/>

<div>
{this.renderTable()}
</div>

        <AlertModel show_alert={this.state.show_alert}/>
        <Button outline color="primary" onClick={this.buttonClicked.bind(this)}>Open Alert</Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {home: state};
}

export default connect(mapStateToProps, {fetchHomeValues})(Home);
