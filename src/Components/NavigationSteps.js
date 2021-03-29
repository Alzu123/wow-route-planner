import React from 'react'

const NavigationSteps = ({ nodes, finalRoute }) => {

  // This works but needs cleaning up.
  // TODO: 1) Add support for different types. 2) Add support for flying instead of teleporting. 3) Beautify end result

  console.log(nodes)
  console.log(finalRoute)
  return (
    <div>
      <p>The shortest route is {Math.round((nodes[0].distanceToTarget + Number.EPSILON) * 100) / 100} units long.</p>
      <ol>
        {finalRoute.map((nodeId, index) =>
          index === 0 || index === finalRoute.length - 1 ? '' : <li key={index}>{nodes[nodeId].type} - {nodes[nodeId].origin.description} to {nodes[nodeId].destination.description}</li>
        )}
        <li key={nodes.length}>Fly to your destination.</li>
      </ol>
    </div>
  )
}

export default NavigationSteps