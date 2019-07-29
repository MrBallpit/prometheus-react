import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'

import BuildTable from './components/BuildTable.js'
import BuildJumbotron from './components/BuildJumbotron.js'



class NavigationContainer extends React.Component {
  render () {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}



class TestClass extends React.Component {
  render() {

    const input = {
      "items": [
        {
          "id": 1,
          "name": "charles",
          "type": "weirdo"
        },
        {
          "id": 2,
          "name": "dan",
          "type": "fired"
        },
        {
          "id": 3,
          "name": "scrub",
          "type": "doop"
        }
      ]
    }
    return (
      <BuildTable elements={input} />
    );
  }
}


class WebpageContainer extends React.Component {
  render () {
    return (
      <Container>
        <Row>
          <Col>
            <BuildJumbotron titleText={"N&IT Engine SRE Webpage"} bodyText={"This is a webpage built to display N&IT data"} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NavigationContainer />
          </Col>
        </Row>
        <Row>
          <Col>
            <TestClass />
          </Col>
        </Row>
      </Container>
    );
  }
}

function WebpageContainerf() {
  return (
    <WebpageContainer />
  );
}
export default WebpageContainer;
