import Point from '../../Data/Point'
import UpdateFromPlayerTeleports from '../../Data/Teleport Processing/UpdateFromPlayerTeleports'
import CalculateRouteInformation from './CalculateRouteInformation'
import GetSpeed from './Speed/GetSpeed'

const generateAllRouteCombinations = (nodes, maxDepth) => {
  const startNode = nodes[0]
  const endNode = nodes[nodes.length - 1]

  function iterate(startNode, route) {
    if (result.length > 500) { // In case a huge number of results are found
      return
    }

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
  const maxNumberOfNodesToPass = 6 // Maximum number of teleports to use
  const acceptableCostIncrease = 1.2 // Maximum cost increase compared to optimal route to be considered.

  let nodes = []
  const updatedTeleports = UpdateFromPlayerTeleports(teleports, startPosition).filter(teleport => teleport.enabled)

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
    const distanceToEndNode = currentDestination.distanceTo(endNodePosition) * endNodePosition.continent.scale
    return ({...node, distanceToTarget: distanceToEndNode})
  })
  nodes = nodes.map(node => ({...node, nextNodes: []}))
  nodes = nodes.map(node => ({...node, costToTarget: node.cost + node.distanceToTarget / GetSpeed(node.destination.position.continent.isFlyable)}))

  // Radiate the best found distance from node origins
  for (let i = 0; i < maxNumberOfNodesToPass + 2; i++) { // + 2 because start and end nodes are in the count
    for (let j = 0; j < nodes.length; j++) {
      const nodeToUpdate = nodes[j]
      let currentBestCost = nodeToUpdate.costToTarget

      // Compare the node to all other nodes and the distance that it would take going through the comparison node first
      for (let k = 1; k < nodes.length; k++) { // Start from 1 as we skip startNode (node 0)
        const comparisonNode = nodes[k]
        const comparisonPos = comparisonNode.origin.position
        if (nodeToUpdate.id === comparisonNode.id || comparisonNode.id === endNode.id) {
          continue
        }
        
        const newDistance = comparisonNode.distanceToTarget + nodeToUpdate.destination.position.distanceTo(comparisonPos) * comparisonPos.continent.scale
        const newCost = nodeToUpdate.cost + comparisonNode.costToTarget + newDistance / GetSpeed(comparisonPos.continent.isFlyable)

        // If better result save the distance and directions
        if (newCost < currentBestCost) {
          currentBestCost = newCost
          nodeToUpdate.distanceToTarget = newDistance
          nodeToUpdate.costToTarget = newCost
        }

        nodes[j] = nodeToUpdate
      }
    }
  }

  // Go through all nodes once more to determine their children
  for (let i = 0; i < nodes.length; i++) {
    const nodeToUpdate = nodes[i]
    const costTarget = nodeToUpdate.costToTarget
    for (let j = 1; j < nodes.length; j++) {
      const comparisonNode = nodes[j]
      const costOfGettingToTarget = nodeToUpdate.destination.position.distanceTo(comparisonNode.origin.position) * comparisonNode.origin.position.continent.scale / GetSpeed(comparisonNode.origin.position.continent.isFlyable)
      const comparisonCost = nodeToUpdate.cost + comparisonNode.costToTarget + costOfGettingToTarget

      const comparisonReachable = nodeToUpdate.destination.position.distanceTo(comparisonNode.origin.position) !== Infinity
      const comparisonNodeInChildren = nodeToUpdate.nextNodes.some(nextNode => nextNode.id === comparisonNode.id)
      const comparisonNodeVisitsKnownSpot = nodeToUpdate.nextNodes.some(nextNode => nextNode.origin.position.distanceTo(comparisonNode.destination.position) * nextNode.destination.position.continent.scale < 100)

      if (comparisonCost < costTarget * acceptableCostIncrease && !comparisonNodeInChildren && !comparisonNodeVisitsKnownSpot && comparisonReachable) {
        nodeToUpdate.nextNodes.push(comparisonNode)
      }
    }

    nodes[i] = nodeToUpdate
  }

  // Now that we have the shortest paths in the nodes written down, write them all into an array.
  const allPossibleRoutes = generateAllRouteCombinations(nodes, maxNumberOfNodesToPass)
  const candidateRoutes = CalculateRouteInformation(allPossibleRoutes)

  return ({nodes: nodes, candidateRoutes: candidateRoutes})
}

export default RouteToDestination