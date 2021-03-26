const distanceBetweenTwoPoints = (point1, point2) => {
    const xDiff = point2.x - point1.x
    const yDiff = point2.y - point1.y

    return Math.sqrt(xDiff ** 2 + yDiff ** 2)
}

export const RouteToDestination = ( startPoint, endPoint, teleports ) => {

    const startNode = [
        {
            name: "Start",
            id: 0,
            origin: {x: startPoint.x, y: startPoint.y},
            destination: {x: startPoint.x, y: startPoint.y}
        }
    ]
    // Add the initial distances to goal and the construction for best route
    let nodes = startNode.concat(teleports)
                           .map(node => ({...node, distanceToDestination: distanceBetweenTwoPoints(node.destination, endPoint)}))
                           .map(node => ({...node, bestRoute: [node.id]}))

    // Iterate over all points and compare that point to all others until no improvements have been found or max iteration limit is hit
    let improvementsFound = false
    let iteration = 0
    const maxSearchDepth = 100
    do {
        iteration++
        improvementsFound = false
        for (let i = 0; i < nodes.length; i++) {
            let thisRoundImprovement = ''
            for (let j = 0; j < nodes.length; j++) {
                // Try if the distance between current point and its target plus the targets destination to end is less than current point's best attempt
                const improvementAttempt = distanceBetweenTwoPoints(nodes[i].destination, nodes[j].origin) + nodes[j].distanceToDestination
                if (improvementAttempt < nodes[i].distanceToDestination) {
                    nodes[i].distanceToDestination = improvementAttempt
                    thisRoundImprovement = nodes[j].id
                    improvementsFound = true
                }
            }    
            nodes[i].bestRoute = nodes[i].bestRoute.concat(thisRoundImprovement)
        }
    } while (improvementsFound && iteration <= maxSearchDepth)
    
    nodes = nodes.map(node => ({...node, bestRoute: node.bestRoute.filter(id => id !== '')}))
    let finalRoute = nodes[0].bestRoute.map(id => id === 0 ? 0 : nodes[id].bestRoute).flat() // This might need to be done again depending on how many layers of portals there are. Not tested yet so check later

    // Add destination as to the return values as well
    const endNode = 
    {
        name: "End",
        id: nodes.length,
        origin: {x: endPoint.x, y: endPoint.y},
        destination: {x: endPoint.x, y: endPoint.y}
    }
    nodes = nodes.concat(endNode)
    finalRoute = finalRoute.concat(endNode.id)
    return ([nodes, finalRoute])
}

export default RouteToDestination