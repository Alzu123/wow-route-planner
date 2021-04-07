import React from 'react'

import { Navbar , Nav } from 'react-bootstrap'

const Header = ({ showTabs }) => {

  return (
    <Navbar bg="light" expand="md" id='header'>
      <Navbar.Brand href="#home">WoW Route Finder</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav variant='tabs' className="mr-auto">
          <Nav.Link onSelect={showTabs} href="#home">Home (Map)</Nav.Link>
          <Nav.Link onSelect={showTabs} href="#teleports">Teleports</Nav.Link>
          <Nav.Link onSelect={showTabs} href="#configuration">Configure</Nav.Link>
          <Nav.Link onSelect={showTabs} href="#help">Help</Nav.Link>
          <Nav.Link onSelect={showTabs} href="#info">Info</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header