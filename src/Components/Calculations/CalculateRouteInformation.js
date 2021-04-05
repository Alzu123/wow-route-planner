import PlayerInfo from '../../Data/Player'
import DistanceBetweenTwoPoints from './DistanceBetweenTwoPoints'
import GetSpeed from './Speed/GetSpeed'

const calculatePreference = (cost, flyDistance) => {
  // The result is roughly equal to seconds required for the route
  return cost + flyDistance / GetSpeed(PlayerInfo.speedModifier)
}

const CalculateRouteInformation = (routes) => {
  // Create object form and add route total cost
  routes = routes.map(route => ({nodes: route, totalCost: route.reduce(function (sum, node) {return sum + node.cost}, 0)}))

  // Calculate the distance to fly to each node from previous node
  routes = routes.map(route => ({...route, nodes: route.nodes.map(function(node, i) {
    return ({...node, distanceFromPreviousNode: i > 0 ? DistanceBetweenTwoPoints(route.nodes[i - 1].destination, node.origin) : 0})
  })}))

  // Calculate the total flying distance for each route
  routes = routes.map(function(route) {
    const lastNode = route.nodes[route.nodes.length - 1] // This is not the end node but the one before it
    const cumulativeflyDistance = route.nodes.reduce(function (sum, node) {return sum + node.distanceFromPreviousNode}, 0)
    return({...route, totalFlyDistance: lastNode.distanceToTarget + cumulativeflyDistance}
  )})
  
  // Estimate preference based on flying required and route cost
  routes = routes.map(route => ({...route, preference: calculatePreference(route.totalCost, route.totalFlyDistance)}))

  return routes
}

export default CalculateRouteInformation