import DrawPointToCanvas from "./DrawPointToCanvas"
import DrawLineToCanvas from "./DrawLineToCanvas"
import { CANVAS_ACTIVE_TELEPORT_COLOR, CANVAS_TELEPORT_SIZE, CANVAS_TRAVEL_FLY_COLOR, CANVAS_TRAVEL_TELEPORT_COLOR } from "../../Data/ConfigConstants"

export const DrawOptimalRoute = (canvas, optimalRoute, backgroundName) => {
  if (!optimalRoute) {
    return
  }
  optimalRoute = optimalRoute.nodes

  for (let i = 0; i < optimalRoute.length - 1; i++) {
    const currentNode =  optimalRoute[i]
    const nextNode = optimalRoute[i + 1]

    // Draw lines for teleports
    DrawLineToCanvas(canvas, currentNode.origin.position, currentNode.destination.position, CANVAS_TRAVEL_TELEPORT_COLOR, backgroundName)

    // Draw lines for flying
    DrawLineToCanvas(canvas, currentNode.destination.position, nextNode.origin.position, CANVAS_TRAVEL_FLY_COLOR, backgroundName)

    // Draw points for used teleports
    DrawPointToCanvas(canvas, currentNode.origin.position, CANVAS_TELEPORT_SIZE, CANVAS_ACTIVE_TELEPORT_COLOR, backgroundName)
    DrawPointToCanvas(canvas, currentNode.destination.position, CANVAS_TELEPORT_SIZE, CANVAS_ACTIVE_TELEPORT_COLOR, backgroundName)
  }
}

export default DrawOptimalRoute