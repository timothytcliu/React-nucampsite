import React, { Component } from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
  }

  /**
   * function toggles boolean state of small viewport navbar.
   * true: expands out navbar options under hamburger icon
   * false: navbar options hidden; only hamburger icon displayed
   *
   */
  toggleNav = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };

  /**
   * function to set Modal boolean state between false and true
   */
  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  /**
   *
   * @param {form submission data} event
   * displays as string on browser alert
   * toggles form modal to false
   */
  handleLogin = event => {
    alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    );
    this.toggleModal();
    event.preventDefault();
  };

  render() {
    return (
      <>
        {/* Header banner, website name, and slogan */}
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>NuCamp</h1>
                <h2>a better way to camp</h2>
              </div>
            </div>
          </div>
        </Jumbotron>
        {/* navbar. 
            sticks to top of viewport on scrolldown*/}
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            {/* navbar icon on far left */}
            <NavbarBrand className="mr-auto" href="/">
              <img src={logo} height="30" width="30" alt="NuCamp Logo" />
            </NavbarBrand>
            {/* navbar small viewport hamburger icon.
                displays only on xs viewport.
                onClick calls toggleNav function */}
            <NavbarToggler onClick={this.toggleNav} />
            {/* Col/apse wrapper provides navbar to automatically collapse on xs viewport.
                Depends on isOpen boolean state from isNavOpen*/}
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/directory">
                    <i className="fa fa-list fa-lg" /> Directory
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-info fa-lg" /> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <span className="navbar-text ml-auto">
                {/* Calls toggleModal function */}
                <Button outline onClick={this.toggleModal}>
                  <i className="fa fa-sign-in fa-lg" /> Login
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>

        {/* Modal for login form.
            idOpen default state is false. 
            toggle assigned to toggleModal function*/}
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            {/* onSubmit triggered by Button of type "submit", calls handleLogin function */}
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={input => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  innerRef={input => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={input => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Login
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default Header;
