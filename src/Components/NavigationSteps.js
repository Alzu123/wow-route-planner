import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import ToggleTeleport from './ToggleTeleport'

const NavigationSteps = ({ finalRoute, onClick }) => {
  if (!finalRoute) {
    return 'Couldn\'t find a route.'
  }
  const routeNodes = finalRoute.nodes
  const totalFlying = Math.round(finalRoute.totalFlyDistance + Number.EPSILON)
  const totalTime = Math.round(finalRoute.preference + Number.EPSILON)

  return (
    <Container id='navigation-text'>
      <Row key={0} id='navigation-header' className='bold'>
        <Col>Name</Col>
        <Col>Destination</Col>
        <Col className='align-right' xs={2}>Disable</Col>
      </Row>

      {routeNodes.map(function(node, index) {
        const startOrEnd = index === 0 || index === routeNodes.length - 1

        if (!startOrEnd) {
          return (
            <Row id={node.id} key={node.id}>
              <Col>{index}. {node.name}</Col>
              <Col>{node.destination.description}</Col>
              <Col className='align-right' xs={2}><ToggleTeleport onClick={onClick} teleport={node} text='Disable'/></Col>
            </Row>
          )
        }
        return ''
      })}

      <Row key={finalRoute.nodes.length - 1}>
        <Col>{finalRoute.nodes.length - 1}. Fly to your destination</Col>
      </Row>
      <br></br>
      The route requires {totalFlying} yards of travelling. It takes {totalTime} seconds to get to your destination.
    </Container>
  )
}

export default NavigationSteps