import React from 'react'
import { Container, Jumbotron, ListGroup, ListGroupItem, Row, Col, Button } from 'react-bootstrap'

const fancifyCoordinates = (coordinates) => {
  return `[${coordinates.x}, ${coordinates.y}]`
}

const Teleports = ({ show, teleports, onClick }) => {
  if (show) {
    return (
      <Jumbotron className='overlay teleports'>
        <h1 className='jumbotron-title'>List of all teleports</h1>
        <p className='jumbotron-subtitle muted'>You can enable and disable any teleports here. Green button means that the teleport is active whereas red means inactive.</p>
        <ListGroup>
          {teleports.map(function(teleport) {
             return (
             <ListGroupItem key={teleport.id}>
              <Container>
                <Row id={teleport.id}>
                  <Col xs={2}>{teleport.enabled ? <Button variant='success' onClick={onClick}>Toggle</Button> : <Button variant='danger' onClick={onClick}>Toggle</Button>}</Col>
                  <Col xs={3}>{teleport.name}</Col>
                  <Col>From {teleport.fromPlayer ? 'player' : fancifyCoordinates(teleport.origin.position)} to {fancifyCoordinates(teleport.destination.position)} in {teleport.destination.description}, {teleport.destination.position.continent.name}</Col>
                </Row>
              </Container>
            </ListGroupItem>)
          })}
        </ListGroup>
      </Jumbotron>
    )
  } else {
    return null
  }
}

export default Teleports