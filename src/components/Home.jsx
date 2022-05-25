import React from 'react'

import { Container, Navbar , Nav, FormText } from 'react-bootstrap';



const Home = () => {
  return (
    <div>
      <div>
        <h2 className="text-center">Home</h2>
      </div>
    <Navbar bg="light" expand="lg">
<Container>
    <Navbar.Brand href="#home">Studio Ghibli</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Movies</Nav.Link>
    
    </Nav>
    </Navbar.Collapse>
</Container>
</Navbar>
</div>
  )
}

export default Home