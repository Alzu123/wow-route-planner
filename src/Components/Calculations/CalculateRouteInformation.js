import GetSpeed from './Speed/GetSpeed'

const calculatePreference = (cost, travelDistance, flyable) => {
  // The result is roughly equal to seconds required for the route
  return cost + travelDistance / GetSpeed(flyable)
}

const CalculateRouteInformation = (routes) => {
  // Create object form and add route total cost
  routes = routes.map(route => ({nodes: route, totalCost: route.reduce(function (sum, node) {return sum + node.cost}, 0)}))

  // Calculate the distance to fly to each node from previous node
  routes = routes.map(route => ({...route, nodes: route.nodes.map(function(node, i) {
    if (i === 0) {
      return ({...node, distanceFromPreviousNode: 0})
    }
    const previousNodePosition = route.nodes[i - 1].destination.position
    const currentNodePosition = node.origin.position
    return ({...node, distanceFromPreviousNode: previousNodePosition.distanceTo(currentNodePosition) * currentNodePosition.continent.scale})
  })}))

  // Calculate the total flying distance for each route
  routes = routes.map(function(route) {
    const cumulativeflyDistance = route.nodes.reduce(function (sum, node) {return sum + node.distanceFromPreviousNode}, 0)
    return({...route, totalFlyDistance: cumulativeflyDistance}
  )})
  
  // Estimate preference based on flying required and route cost
  routes = routes.map(function(route) {
    const routePreference = route.nodes.reduce(function (sum, node) {return sum + calculatePreference(node.cost, node.distanceFromPreviousNode, node.destination.position.continent.isFlyable)}, 0)
    return ({...route, preference: routePreference})
  })

  // Count number of loading screens
  routes = routes.map(route => ({...route, totalLoadingScreens: route.nodes.reduce(function (sum, node) {return sum + node.numLoadingScreens}, 0)}))

  // Estimate scenery value
  routes = routes.map(route => ({...route, sceneryValue: route.nodes.reduce(function (sum, node) {
    return (sum - node.type === 'World' ? node.travelTime * 2 : 0) - node.distanceFromPreviousNode / GetSpeed(node.origin.position.continent.isFlyable)
  }, 0)}))


  return routes
}

export default CalculateRouteInformation