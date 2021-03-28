const distanceBetweenTwoPoints = (position1, position2) => {
  if (position1.continent !== position2.continent) {
    return Number.POSITIVE_INFINITY
  }

  const point1 = position1.coordinates
  const point2 = position2.coordinates

  const xDiff = point2.x - point1.x
  const yDiff = point2.y - point1.y
  return Math.round(Math.sqrt(xDiff ** 2 + yDiff ** 2) * 100) / 100
}

const updatePlayerTeleports = (playerLocation, teleports) => {
  return teleports.map(teleport => teleport.fromPlayer ? {...teleport, origin: {...teleport.origin, coordinates: playerLocation.coordinates, continent: playerLocation.continent}} : teleport)
}

export const RouteToDestination = ( startPosition, endPosition, teleports ) => {

  let nodes = []
  const updatedTeleports = updatePlayerTeleports(startPosition, teleports)

  const startNode = {
    name: "Start",
    id: 0,
    origin: {
      coordinates: startPosition.coordinates,
      continent: startPosition.continent
    },
    destination: {
      coordinates: startPosition.coordinates,
      continent: startPosition.continent
    }
  }
  const endNode = {
    name: "End",
    id: teleports.length + 1,
    origin: {
      coordinates: endPosition.coordinates,
      continent: endPosition.continent
    },
    destination: {
      coordinates: endPosition.coordinates,
      continent: endPosition.continent
    }
  }

  let targetNode = endNode
  let bestRoute = [startNode.id]
    
  // Add the initial distances to goal and the construction for best route
  nodes = nodes.concat(startNode)
               .concat(updatedTeleports)
               .concat(endNode)

  // Find the node with the closest destination to the target
  nodes = nodes.map(node => ({...node, distanceToTarget: distanceBetweenTwoPoints(node.destination, targetNode.origin)}))
                           .map(node => ({...node, nextNode: targetNode.id}))

  // Radiate the best found distance from node origins and compute the best found route.
  const maxNumberOfNodesToPass = 10
  // Loop n times to update values often
  for (let i = 0; i < maxNumberOfNodesToPass; i++) {
    // Update every node individually
    for (let j = 0; j < nodes.length; j++) {
      let nodeToUpdate = nodes[j]
      let currentBestDistance = nodeToUpdate.distanceToTarget

      // Compare the node to all other nodes and the distance that it would take going through the comparison node first
      for (let k = 0; k < nodes.length; k++) {
        let comparisonNode = nodes[k]
        let newDistance = comparisonNode.distanceToTarget + distanceBetweenTwoPoints(nodeToUpdate.destination, comparisonNode.origin)

        // If better result save the distance and directions
        if (newDistance < currentBestDistance) {
          currentBestDistance = newDistance
          nodes[j].distanceToTarget = newDistance
          nodes[j].nextNode = k
        }
      }
    }
  }

  let currentNode = nodes[0]
  do {
    bestRoute.push(currentNode.nextNode)
    currentNode = nodes[currentNode.nextNode]
  } while (currentNode.id !== endNode.id)

  return ([nodes, bestRoute])
}

export default RouteToDestination