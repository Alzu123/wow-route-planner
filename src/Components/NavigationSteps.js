import React from 'react'

const beautifyNavigation = (node) => {
  return `${node.type} - ${node.name} - ${node.origin.description} to ${node.destination.description}`
}

const NavigationSteps = ({ nodes, finalRoute }) => {
  const routeNodes = finalRoute.nodes

  // This works but needs cleaning up.
  // TODO: 1) Add support for different types. 2) Add support for flying instead of teleporting. 3) Beautify end result
  return (
    <div>
      <p>The route is {Math.round((finalRoute.totalFlyDistance + Number.EPSILON) * 100) / 100} units long.</p>
      <ol>
        {routeNodes.map((node, index) =>
          index === 0 || index === routeNodes.length - 1 ? '' : <li key={index}>{beautifyNavigation(node)}</li>
        )}
        <li key={nodes.length}>Fly to your destination.</li>
      </ol>
    </div>
  )
}

export default NavigationSteps