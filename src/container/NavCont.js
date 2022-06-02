import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom'

export default function NavCont() {
  return (
    <Navbar bg="primary" variant="light" fixed="top">
      <Container>
        <Navbar.Brand >Alex's React Project</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Movie List</Nav.Link>
              <Nav.Link as={Link} to="/TodoList">Todo List</Nav.Link>
              <Nav.Link as={Link} to="/weather">Weather App</Nav.Link>
            </Nav>
          </Container>
  </Navbar>
  )
}
