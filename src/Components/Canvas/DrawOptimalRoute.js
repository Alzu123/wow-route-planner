import DrawPointToCanvas from "./DrawPointToCanvas"
import DrawLineToCanvas from "./DrawLineToCanvas"

export const DrawOptimalRoute = (canvas, nodes, optimalRoute) => {
  for (let i = 0; i < optimalRoute.length; i++) {
    const currentNode = nodes[optimalRoute[i]]
    const nextNode = nodes[optimalRoute[i + 1]]
    
    DrawPointToCanvas(canvas, currentNode.origin)
    DrawPointToCanvas(canvas, currentNode.destination)

    if (i !== optimalRoute.length - 1) {
      DrawLineToCanvas(canvas, currentNode.destination, nextNode.origin)
    }
  }
}

export default DrawOptimalRoute