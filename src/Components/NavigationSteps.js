import React from 'react'

import { Col, Container, ListGroup, Row } from 'react-bootstrap'

const beautifyNavigation = (node) => {
  return `${node.type} - ${node.name} - ${node.origin.description} to ${node.destination.description}`
}

const NavigationSteps = ({ nodes, finalRoute }) => {
  const routeNodes = finalRoute.nodes

  return (
    <Container id='navigationText'>
      <ol>
        {routeNodes.map((node, index) =>
          index === 0 || index === routeNodes.length - 1 ? '' : <li key={index}>{beautifyNavigation(node)}</li>
        )}
        <li key={nodes.length}>Fly to your destination.</li>
      </ol>
      The route requires {Math.round((finalRoute.totalFlyDistance + Number.EPSILON) * 100) / 100} yards of flying. It takes roughly {Math.round(finalRoute.preference + Number.EPSILON)} seconds to get to your destination.
    </Container>
  )

/*   return (
    <div>
      <p>The route requires {Math.round((finalRoute.totalFlyDistance + Number.EPSILON) * 100) / 100} yards of flying. It takes roughly {Math.round(finalRoute.preference + Number.EPSILON)} seconds to get to your destination.</p>
      <ol>
        {routeNodes.map((node, index) =>
          index === 0 || index === routeNodes.length - 1 ? '' : <li key={index}>{beautifyNavigation(node)}</li>
        )}
        <li key={nodes.length}>Fly to your destination.</li>
      </ol>
    </div>
  ) */
}

export default NavigationSteps