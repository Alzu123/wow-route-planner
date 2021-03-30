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

const generateAllRouteCombinations2 = (nodes, maxDepth) => {
  function iterate(startNode, route) {
    if (route.length > maxDepth) {
      return
    }

    const nodeChildren = startNode.nextNodes
    const relevantChildren = nodeChildren.filter(node => !route.some(routeNode => routeNode.id === node.id))
    const endNodeInChildren = relevantChildren.some(child => child.id === nodes[nodes.length - 1].id)
    if (relevantChildren.length > 0 && !endNodeInChildren) {
      return relevantChildren.forEach(nodeChild => iterate(nodeChild, route.concat(nodeChild)))
    }
    result.push(route)
  }

  let result = []
  iterate(nodes[0], []);

  return result
}

export const RouteToDestination = ( startPosition, endPosition, teleports ) => {
  const maxNumberOfNodesToPass = 5 // i.e. max number of teleports to use
  const acceptableDistanceIncrease = 3 // Maximum distance in absolute coordinate units to optimal route to be considered. TODO: Normalize coordinate units to each continent (map)
  const acceptablePenaltyDeviation = 1.2 // Maximum penalty relative to lowest total penalty to be considered
  const acceptableFlightDistanceDeviation = 1.2 // Maximum distance relative to lowest total flight distance to be considered

  let nodes = []
  const updatedTeleports = updatePlayerTeleports(startPosition, teleports).filter(teleport => teleport.enabled)

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
    },
    nextNodes: []
  }

  let targetNode = endNode
    
  // Add the initial distances to goal and the construction for best route
  nodes = nodes.concat(startNode)
               .concat(updatedTeleports).concat(endNode) 

  // Find the node with the closest destination to the target
  nodes = nodes.map(node => ({...node, distanceToTarget: distanceBetweenTwoPoints(node.destination, targetNode.origin)}))
               .map(node => ({...node, nextNodes: [targetNode]}))
               .map(node => ({...node, penalty: Math.random()*100})) // TEMP
               //.concat(endNode) // Add this here so it doesn't get a target node

  // Radiate the best found distance from node origins and compute the best found route.
  for (let i = 0; i < maxNumberOfNodesToPass; i++) {
    // Update every node individually
    for (let j = 0; j < nodes.length; j++) {
      let nodeToUpdate = nodes[j]
      let currentBestDistance = nodeToUpdate.distanceToTarget

      // Compare the node to all other nodes and the distance that it would take going through the comparison node first
      for (let k = 0; k < nodes.length; k++) {
        let comparisonNode = nodes[k]
        if (nodeToUpdate.id === comparisonNode.id) {
          continue
        }

        let newDistance = comparisonNode.distanceToTarget + distanceBetweenTwoPoints(nodeToUpdate.destination, comparisonNode.origin)

        // If better result save the distance and directions
        if (newDistance < currentBestDistance) {
          currentBestDistance = newDistance
          nodeToUpdate.distanceToTarget = newDistance
          nodeToUpdate.nextNodes = [comparisonNode]
        } else if (newDistance <= currentBestDistance + acceptableDistanceIncrease && !nodeToUpdate.nextNodes.some(nextNode => nextNode.id === comparisonNode.id)) { // If result is close enough, add it for comparison
          nodeToUpdate.nextNodes.push(comparisonNode)
        }

        nodes[j] = nodeToUpdate
      }
    }
  }

  // Now that we have the shortest paths in the nodes written down, write them all into an array.
  let allPossibleRoutes = generateAllRouteCombinations2(nodes, maxNumberOfNodesToPass).map(route => ({nodes: route, totalCost: route.reduce(function (sum, node) {return sum + node.penalty}, 0)}))

  // Calculate the distance to fly to each node from previous node for all possible routes
  allPossibleRoutes = allPossibleRoutes.map(route => ({...route, nodes: route.nodes.map(function(node, i) {
    let previousNode
    if (i === 0) {
      previousNode = startNode
    } else {
      previousNode = route.nodes[i - 1]
    }
    return ({...node, distanceFromPreviousNode: distanceBetweenTwoPoints(previousNode.destination, node.origin)})
  })}))
  // Calculate the total flying distance for each route
  allPossibleRoutes = allPossibleRoutes.map(route => ({...route, totalFlyDistance: route.nodes[route.nodes.length - 1].distanceToTarget + route.nodes.reduce(function (sum, node) {return sum + node.distanceFromPreviousNode}, 0)}))
  const lowestPenaltyRoute = allPossibleRoutes.reduce(function (prev, current) {return prev.totalCost < current.totalCost ? prev : current})
  const acceptablePenaltyLevel = lowestPenaltyRoute.totalCost * acceptablePenaltyDeviation
  const acceptablePenaltyRoutes = allPossibleRoutes.filter(route => route.totalCost < acceptablePenaltyLevel)

  const fewestNodesRequired = Math.min.apply(null, allPossibleRoutes.map(route => route.nodes.length))
  const routesWithFewestNodes = allPossibleRoutes.filter(route => route.nodes.length === fewestNodesRequired)

  const shortestFlightRequired = Math.min.apply(null, allPossibleRoutes.map(route => route.totalFlyDistance))
  const acceptableFlightDistance = shortestFlightRequired * acceptableFlightDistanceDeviation
  const shortestRoutes = allPossibleRoutes.filter(route => route.totalFlyDistance <= acceptableFlightDistance)
  console.log('allPossibleRoutes', allPossibleRoutes)
  console.log('shortestRoutes', shortestRoutes)

  const easiestShortRoute = routesWithFewestNodes.reduce(function (prev, current) {return prev.totalCost < current.totalCost ? prev : current})
  console.log('easiestShortRoute', easiestShortRoute)

  // TODO: Create a selection for user to choose between the easiest route or fewest teleports.
  const bestRoute = [].concat(startNode)
                      .concat(easiestShortRoute.nodes)
                      .concat(endNode)
  return ([nodes, bestRoute])
}

export default RouteToDestination