import React from 'react'

import { Container, Row, Col} from 'react-bootstrap'

const Header = () => {
  return (
    <Container fluid id="header">
      <Row>
        <Col>Home (Map)</Col>
        <Col>List teleports</Col>
        <Col>Configure</Col>
        <Col>Help</Col>
        <Col>Info</Col>
      </Row>
    </Container>
  )
}

export default Header