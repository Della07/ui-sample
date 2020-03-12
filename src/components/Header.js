import React, { Component } from "react";
import { ButtonGroup, Navbar, Button, Dropdown, Row } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div className="">
        <Navbar className="top">
          <Row className="ml-md-4">
            <span className="d-none d-sm-block">
              Philippine Standard Time -
            </span>
            <span className="pl-3 pl-sm-0">
              Tuesday, June 3, 2018 7:30:13 AM
            </span>
          </Row>

          <Dropdown className="my-auto mr-4 d-none d-none d-lg-block">
            <Dropdown.Toggle variant="" id="dropdown-basic" className="ttext">
              Accessibility
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar>
        <Navbar className="navbg ">
          <Navbar.Brand className="ml-md-5" href="#home">
            <img
              alt=""
              src="../logo.png"
              width="143px"
              height="37.1px"
              className=""
            />
          </Navbar.Brand>
          <ButtonGroup className="mr-lg-4 d-none d-lg-block">
            <Button className="login mx-2">Login</Button>
            <Button className="signup mx-2">Sign up for a new account</Button>
          </ButtonGroup>
          <Button className="d-block d-lg-none mr-sm-4">Menu</Button>
        </Navbar>
      </div>
    );
  }
}

export default Header;
