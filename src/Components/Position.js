import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Position = ({ pretext, position }) => {
  return (
    <Container>
      <Row>
        <Col xs={3} className='bold'>{pretext}</Col>
      </Row>
      <Row>
        <Col>{Math.round(position.x * 10) / 10}, {Math.round(position.y * 10) / 10} in {position.continent.name}</Col>
      </Row>
    </Container>
  )
}

export default Position