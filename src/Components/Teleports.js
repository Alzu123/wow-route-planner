import React from 'react'
import { Container, Jumbotron, ListGroup, ListGroupItem, Row, Col, Button } from 'react-bootstrap'

const fancifyCoordinates = (coordinates) => {
  return `[${coordinates.x}, ${coordinates.y}]`
}

const Teleports = ({ show, teleports, onClick }) => {
  if (show) {
    return (
      <Jumbotron className='overlay'>
        <ListGroup>
          {teleports.map(function(teleport) {
             return (<ListGroupItem>
              <Container>
                <Row id={teleport.id}>
                  <Col xs={2}>{teleport.enabled ? <Button variant='primary' onClick={onClick}>Toggle</Button> : <Button variant='danger' onClick={onClick}>Toggle</Button>}</Col>
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