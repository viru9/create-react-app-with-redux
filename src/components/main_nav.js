import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';
import {fetchHomeValues} from './../actions/home';

class MainNav extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
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

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        {/* {this.renderNavBar()}*/}
        <Navbar color="light" light expand="md">

         <NavbarBrand  tag={Link} to="/">reactstrap</NavbarBrand>

         <NavbarToggler onClick={this.toggle} />

         <Collapse isOpen={this.state.isOpen} navbar>

           <Nav className="ml-auto" navbar>

             <NavItem>
               <NavLink tag={Link} to="/about">About</NavLink>
             </NavItem>

             <NavItem>
              <NavLink tag={Link} to="/contact">Contact</NavLink>
             </NavItem>

             <NavItem>
               <NavLink href="https://github.com/reactstrap/reactstrap">Reactstrap</NavLink>
             </NavItem>

             <UncontrolledDropdown nav inNavbar>
               <DropdownToggle nav caret>
                 Options
               </DropdownToggle>
               <DropdownMenu right>
                 <DropdownItem>
                   Sign In
                 </DropdownItem>
                 <DropdownItem>
                   Logout
                 </DropdownItem>
                 <DropdownItem divider />
                 <DropdownItem>
                   Reset
                 </DropdownItem>
               </DropdownMenu>
             </UncontrolledDropdown>
           </Nav>
         </Collapse>
       </Navbar>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {mainNav: state};
}

export default connect(mapStateToProps, {fetchHomeValues})(MainNav);
