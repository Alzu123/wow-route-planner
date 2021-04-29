import React from 'react'
import { Navbar, Nav, Media } from 'react-bootstrap'

const Header = ({ showTabs }) => {
  const icon = require('../Data/Images/Icons/Logo.png').default

  return (
    <Navbar bg='header' variant='dark' expand='md' id='header'>
      <Navbar.Brand onClick={showTabs} href='#home'>
        <Media>
          <img
            alt='World of Warcraft game icon'
            src={icon}
            width='45px'
            height='45px'
            className='d-inline-block align-self-center'
            id='logo-img'
          />
          <Media.Body>
            <div id='logo-title'>WoW</div>
            <div id='logo-subtitle'>Route Planner</div>
          </Media.Body>
        </Media>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto' defaultActiveKey="#home">
          <Nav.Link onSelect={showTabs} href='#home'>Home</Nav.Link>
          <Nav.Link onSelect={showTabs} href='#teleports'>Set Teleports</Nav.Link>
          <Nav.Link onSelect={showTabs} href='#configuration'>Configure</Nav.Link>
          <Nav.Link onSelect={showTabs} href='#info'>Info</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header