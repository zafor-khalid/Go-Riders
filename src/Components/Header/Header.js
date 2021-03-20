import React, {Component, } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'



const mapStateToProps = (state) => {
  return {
    idToken: state.idToken,
    localId: state.localId,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
      
  }
}
class Header extends Component{
  state={
    collapsed:true
  }
  componentDidMount(){
    // this.props.fetchName(this.props.idToken);
}
    toggleNavbar=()=>{
        this.setState({
          collapsed:!this.state.collapsed
        })
    }
    
    render(){
      let link=null;
    if(this.props.idToken===null){
      link=(
        <Nav navbar className="ml-auto">
              <NavItem>
              <NavLink exact to="/" className="btn text-dark font-weight-bold">Home</NavLink>
              </NavItem>
              <NavItem>
              <NavLink exact to="/Destination" className="btn text-dark font-weight-bold">Destination</NavLink>
              </NavItem>
              <NavItem>
              <NavLink exact to="/blog" className="btn text-dark font-weight-bold">Blog</NavLink>
              </NavItem>
              <NavItem>
              <NavLink exact to="/contact" className="btn text-dark font-weight-bold">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/login" className="btn btn-danger text-light font-weight-bold">Login</NavLink>
              </NavItem>
            </Nav>
      )
    }
    else{
      link=<Nav navbar className="ml-auto">
      <NavItem>
      <NavLink exact to="/" className="btn text-dark font-weight-bold">Home</NavLink>
      </NavItem>
      <NavItem>
      <NavLink exact to="/Destination" className="btn text-dark font-weight-bold">Destination</NavLink>
      </NavItem>
      <NavItem>
      <NavLink exact to="/blog" className="btn text-dark font-weight-bold">Blog</NavLink>
      </NavItem>
      <NavItem>
      <NavLink exact to="/contact" className="btn text-dark font-weight-bold">Contact</NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to="/logout" className="btn btn-danger text-light font-weight-bold">Logout</NavLink>
      </NavItem>
    </Nav>
    }
      return(
        <div className="container">
        <Navbar color="faded" light expand="md">
          <NavbarBrand href="/" className="mr-auto h1" style={{
              fontSize:"40px",
              fontStyle:"bold"
          }}>Urban Riders</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            {link}
          </Collapse>
        </Navbar>
      </div>
    )
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);