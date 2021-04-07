import React from 'react'

import { Navbar , Nav } from 'react-bootstrap'

const Header = ({ showTeleports }) => {

  return (
    <Navbar bg="light" expand="md" id='header'>
      <Navbar.Brand href="#home">WoW Route Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant='tabs' className="mr-auto">
          <Nav.Link onSelect={showTeleports} href="#home">Home (Map)</Nav.Link>
          <Nav.Link onSelect={showTeleports} href="#teleports">Teleports</Nav.Link>
          <Nav.Link onSelect={showTeleports} href="#settings">Configure</Nav.Link>
          <Nav.Link onSelect={showTeleports} href="#help">Help</Nav.Link>
          <Nav.Link onSelect={showTeleports} href="#info">Info</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header