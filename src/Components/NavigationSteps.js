import React from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import GetPointFlyability from './Calculations/GetPointFlyability'
import ShowTargetContinent from './ShowTargetContinent'
import ToggleTeleport from './ToggleTeleport'

function formatTimeText(seconds) {
  // The time is always in seconds or minutes so no need to handle anything else
  let minutes = Math.floor(seconds / 60)
  seconds = seconds - 60 * minutes 

  if (minutes > 0) {
    return `${minutes} min ${seconds} s`
  } else {
    return `${seconds} s`
  }
}

const NavigationSteps = ({ finalRoute, onClick, startPosition, endPosition, onClickContinent }) => {
  let errorText;
  if (!startPosition && !endPosition) {
    errorText = 'Please enter the start position and the destination of the route.'
  } else if (startPosition && !endPosition) {
    errorText = 'Please enter the route destination.'
  } else if (!startPosition && endPosition) {
    errorText = 'Please enter the start position of the route.'
  } else if (!finalRoute) {
    errorText = 'Couldn\'t find a route with the available teleports.'
  }

  if (errorText) {
    return (
      <Container className='no-side-padding navigation-steps'>
        <Row key={0} className='navigation-step-row '>
          <Col className='bold'>Planned route</Col>
        </Row>
        <Row>
          <Col className='muted'>{errorText}</Col>
        </Row>
      </Container>
    )
  }

  const routeNodes = finalRoute.nodes.filter((_, i) => i !== 0 && i !== finalRoute.nodes.length - 0)
  const totalFlying = Math.round(finalRoute.totalTravelDistance + Number.EPSILON)
  const totalTime = Math.round(finalRoute.totalTime + Number.EPSILON)

  let shownSteps = []
  let runningKey = 1
  routeNodes.forEach(function(node) {
    if (node.distanceFromPreviousNode > 5) {
      shownSteps.push({
        name: node.origin.description,
        destination: node.origin,
        distance: node.distanceFromPreviousNode,
        isFlyable: node.origin.position.continent.isFlyable,
        isNode: false,
        key: runningKey
      })
      runningKey += 1
    }
    shownSteps.push({...node, isNode: true, key: runningKey})
    runningKey += 1
  })

  shownSteps = shownSteps.filter((_, i) => i !== shownSteps.length - 1)

  return (
    <Container className='no-side-padding navigation-steps'>
      <Row key={0} className='navigation-step-row '>
        <Col className='bold'>Planned route</Col>
        <Col className='align-right muted'>{totalFlying} yards, {formatTimeText(totalTime)}</Col>
      </Row>

      {shownSteps.map(function(step) {
        if (step.isNode) {
          return (
            <Container className='no-side-padding navigation-step-row light-bottom-border' key={step.key}>
              <Row id={step.id}>
                <Col className='navigation-step-text'>{step.name}</Col>
                <Col xs={'auto'}><ToggleTeleport onClick={onClick} teleport={step} text='Disable'/></Col>
                <Col xs={'auto'}><ShowTargetContinent onClick={() => onClickContinent(step.origin.position.continent)}/></Col>
              </Row>
              <Row className='tight-row'>
                <Col className='inner muted'>to {step.destination.description}</Col>
              </Row>
            </Container>
          )
        } else {
          return (
            <Container className='no-side-padding navigation-step-row light-bottom-border' key={step.key}>
              <Row id={step.id}>
                <Col className='navigation-step-text'>{GetPointFlyability(step.destination.position) ? 'Fly' : 'Travel'} to {step.name}</Col>
                <Col className='navigation-distance-adjust align-right muted' xs={3}>{Math.round(step.distance)} yards</Col>
                <Col xs={'auto'} className='align-right'><ShowTargetContinent onClick={() => onClickContinent(step.destination.position.continent)}/></Col>
              </Row>
            </Container>
          )
        }
          
      })}
    </Container>
  )
}

export default NavigationSteps