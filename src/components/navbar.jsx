import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  //   FormControl,
  Button
  //   FormGroup
} from "react-bootstrap";
import Logo from "./images/newlogo.png";

class Navibar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <h1 id="logo">Mr.Eddie</h1>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#Boro">Boro</Nav.Link>
            <Nav.Link href="#InstaGram">InstaGram</Nav.Link>
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            <Button variant="outline-light mr-3">Log In</Button>
          </Form>
        </Navbar>
      </div>
    );
  }
}

export default Navibar;
