import React from 'react'
import { Container, Jumbotron, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'
import ToggleTeleport from './ToggleTeleport'

const positionToPlainText = (location) => {
  const description = location.description
  const continent = location.position.continent.name
  return `${description}, ${continent} (${location.position.x}, ${location.position.y})`
}

const TeleportsPanel = ({ show, teleports, onClick }) => {
  if (show) {
    return (
      <Jumbotron className='overlay-2 teleports'>
        <h1 className='jumbotron-title'>List of all teleports</h1>
        <p className='jumbotron-subtitle muted'>You can enable and disable any teleports here. Green button means that the teleport is active whereas red means inactive.</p>
        <ListGroup>
          {teleports.map(function(teleport) {
             return (
             <ListGroupItem key={teleport.id}>
              <Container>
                <Row id={teleport.id}>
                  <Col xs={2}><ToggleTeleport onClick={onClick} teleport={teleport} text='Toggle'/></Col>
                  <Col xs={3}>{teleport.name}</Col>
                  <Col>From {teleport.fromPlayer ? 'player' : positionToPlainText(teleport.origin)} to {positionToPlainText(teleport.destination)}</Col>
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

export default TeleportsPanel