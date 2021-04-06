import React from 'react'

import { Navbar , Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="#home">WoW Route Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home (Map)</Nav.Link>
            <Nav.Link href="#link">Teleports</Nav.Link>
            <Nav.Link href="#settings">Configure</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
            <Nav.Link href="#info">Info</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header