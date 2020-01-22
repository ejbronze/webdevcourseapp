import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  //   FormControl,
  Button
  //   FormGroup
} from "react-bootstrap";
import Logo from "./images/logo.png";

class Navibar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="secondary" variant="dark">
          <Navbar.Brand href="#home">
            {/* <img src={Logo} width="15%" /> */}
            <h1>Edurator</h1>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">Features</Nav.Link>
            <Nav.Link href="#Portfolio">Boro</Nav.Link>
            <Nav.Link href="#Contact">InstaGram</Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light mr-5">Log In</Button>
          </Form> */}
        </Navbar>
      </div>
    );
  }
}

export default Navibar;
