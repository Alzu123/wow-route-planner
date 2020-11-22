import React from 'react'

const NavigationSteps = ({ nodes, finalRoute }) => {

    return (
        <div>
            <p>The shortest route is {Math.round((nodes[0].distanceToDestination + Number.EPSILON) * 100) / 100} units long</p>
            <ol>
                {finalRoute.map((nodeId, index) =>
                index === 0 ? '' : <li key={index}>Fly to the portal which takes you from {nodes[nodeId].name}</li>
                )}
                <li key={nodes.length}>Fly to your destination.</li>
            </ol>
        </div>

    )
}

export default NavigationSteps