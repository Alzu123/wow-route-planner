import Point from '../../Data/Point'
import ProcessTeleports from '../../Data/Teleport Processing/ProcessTeleports'
import CalculateRouteInformation from './CalculateRouteInformation'

const generateAllRouteCombinations = (nodes, maxDepth) => {
  const startNode = nodes[0]
  const endNode = nodes[nodes.length - 1]

  function iterate(startNode, route) {
    if (route.length > maxDepth + 2) { // +2 because start and end nodes
      return
    }

    const nodeChildren = startNode.nextNodes
    if (nodeChildren) {
      const relevantChildren = nodeChildren.filter(node => !route.some(routeNode => routeNode.id === node.id))
      if (relevantChildren.length > 0) {
        return relevantChildren.forEach(nodeChild => iterate(nodeChild, route.concat(nodeChild)))
      } 
    }

    if (route[route.length - 1].id === endNode.id) {
      result.push(route)
    }
  }

  let result = []
  iterate(nodes[0], [startNode]);

  return result
}

const RouteToDestination = ( startPosition, endPosition, teleports ) => {
  const maxNumberOfNodesToPass = 3 // i.e. max number of teleports to use
  const acceptableDistanceIncrease = 200 // Maximum distance in absolute coordinate units to optimal route to be considered. 200 is roughly 10 seconds of flying
  const acceptableFlightDistanceDeviation = 1.4 // Maximum distance relative to lowest total flight distance to be considered

  let nodes = []
  const updatedTeleports = ProcessTeleports(teleports, startPosition).filter(teleport => teleport.enabled)

  const startNode = {
    name: "Start",
    note: "",
    origin: {
      position: new Point(startPosition.x, startPosition.y, startPosition.continent),
      description: "Player"
    },
    destination: {
      position: new Point(startPosition.x, startPosition.y, startPosition.continent),
      description: "Player"
    },
    fromPlayer: true,
    type: null,
    enabled: true,
    cooldown: null,
    restrictions: {
      faction: "",
      class: "",
      race: "",
      covenant: "",
      profession: ""
    },
    verified: true,
    numLoadingScreens: 0,
    castTime: 0,
    travelTime: 0,
    cost: 0
  }
  const endNode = {
    ...startNode,
    name: "End",
    id: teleports.length + 1,
    origin: {
      position: new Point(endPosition.x, endPosition.y, endPosition.continent),
      description: 'Destination'
    },
    destination: {
      position: new Point(endPosition.x, endPosition.y, endPosition.continent),
      description: 'Destination'
    }
  }
    
  // Add the initial distances to goal and the construction for best route
  nodes = nodes.concat(startNode)
               .concat(updatedTeleports)
               .concat(endNode)

  // Initialize target to end node
  const endNodePosition = endNode.origin.position
  nodes = nodes.map(function(node) {
    const currentDestination = node.destination.position
    const test = currentDestination.distanceTo(endNodePosition, endNodePosition.continent.unreachableAreas) * endNodePosition.continent.scale
    return ({...node, distanceToTarget: test})
  })
  nodes = nodes.map(node => ({...node, nextNodes: node.id === endNode.id ? [] : [nodes[nodes.length - 1]]}))
  //console.log('old', nodes)

  // Radiate the best found distance from node origins
  for (let i = 0; i < maxNumberOfNodesToPass + 2; i++) { // + 2 because start and end nodes are in the count
    for (let j = 0; j < nodes.length; j++) {
      let nodeToUpdate = nodes[j]
      let currentBestDistance = nodeToUpdate.distanceToTarget

      // Compare the node to all other nodes and the distance that it would take going through the comparison node first
      for (let k = 1; k < nodes.length; k++) { // Start from 1 as we skip startNode (node 0)
        let comparisonNode = nodes[k]
        if (nodeToUpdate.id === comparisonNode.id) {
          continue
        }

        let newDistance = comparisonNode.distanceToTarget + nodeToUpdate.destination.position.distanceTo(comparisonNode.origin.position, comparisonNode.origin.position.continent.unreachableAreas) * comparisonNode.origin.position.continent.scale

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
  //console.log(nodes)

  // Now that we have the shortest paths in the nodes written down, write them all into an array.
  const allPossibleRoutes = generateAllRouteCombinations(nodes, maxNumberOfNodesToPass)
  const routesWithPreferences = CalculateRouteInformation(allPossibleRoutes)

  const shortestFlightRequired = Math.min.apply(null, routesWithPreferences.map(route => route.totalFlyDistance))
  const acceptableFlightDistance = shortestFlightRequired * acceptableFlightDistanceDeviation
  const shortestRoutes = routesWithPreferences.filter(route => route.totalFlyDistance <= acceptableFlightDistance)

  const orderedRoutes = shortestRoutes.sort((a, b) => (a.preference > b.preference) ? 1 : -1)

  // TODO: Create a selection for user to choose between the easiest route or fewest teleports.
  //let bestRoute = orderedRoutes[0]
  //console.log(orderedRoutes)
  return ([nodes, orderedRoutes])
}

export default RouteToDestination