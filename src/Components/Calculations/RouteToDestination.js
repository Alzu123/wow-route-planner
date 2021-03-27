const distanceBetweenTwoPoints = (point1, point2) => {
  const xDiff = point2.x - point1.x
  const yDiff = point2.y - point1.y

  return Math.sqrt(xDiff ** 2 + yDiff ** 2)
}

const findNodeWithSmallestDistance = (nodes) => {
  let lowestDistance = Number.POSITIVE_INFINITY
  let bestNode = nodes[0]

  for (let i = 0; i < nodes.length; i++) {
    const currentDistance = nodes[i].distanceToTarget
    if (currentDistance < lowestDistance) {
      lowestDistance = currentDistance
      bestNode = nodes[i]
    }
  }

  return bestNode
}

const updatePlayerTeleports = (playerLocation, teleports) => {
  return teleports.map(teleport => teleport.fromPlayer ? {...teleport, origin: playerLocation} : teleport)
}

export const RouteToDestination = ( startPoint, endPoint, teleports ) => {

  let nodes = []
  const updatedTeleports = updatePlayerTeleports(startPoint, teleports)

  const startNode = {
    name: "Start",
    id: 0,
    origin: {x: startPoint.x, y: startPoint.y},
    destination: {x: startPoint.x, y: startPoint.y}
  }
  const endNode = {
    name: "End",
    id: teleports.length + 1,
    origin: {x: endPoint.x, y: endPoint.y},
    destination: {x: endPoint.x, y: endPoint.y}
  }

  let targetNode = endNode
  let bestRoute = [targetNode.id]
    
  // Add the initial distances to goal and the construction for best route
  nodes = nodes.concat(startNode)
               .concat(updatedTeleports)

  // Find the node with the closest destination to the target
  let nodesToSearch = nodes.map(node => ({...node, distanceToTarget: distanceBetweenTwoPoints(node.destination, targetNode.origin)}))
  console.log("Initial nodes: ", nodesToSearch)

  let iteration = 0
  const maxSearchDepth = 100

  // This algorithm is naive and will get give poor results if the destination of a teleport is close to target but origin is far from start
  do {
    targetNode = findNodeWithSmallestDistance(nodesToSearch)
    nodesToSearch = nodesToSearch.filter(node => node.id !== targetNode.id).map(node => ({...node, distanceToTarget: distanceBetweenTwoPoints(node.destination, targetNode.origin)}))
    bestRoute.unshift(targetNode.id)

    iteration++
  } while (targetNode.id !== startNode.id && iteration <= maxSearchDepth)

  // Add destination as to the return values as well
  nodes = nodes.concat(endNode)
  return ([nodes, bestRoute])
}

export default RouteToDestination