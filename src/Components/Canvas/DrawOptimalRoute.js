import DrawPointToCanvas from "./DrawPointToCanvas"
import DrawLineToCanvas from "./DrawLineToCanvas"

// Function from Stackoverflow (https://stackoverflow.com/a/18085357) modified to get red to green with steps
/* const getRedToGreen = (currentStep, totalSteps) => {

  const percent = currentStep / (totalSteps - 1) * 100
  const green = percent < 50 ? 255 : Math.floor(255 - (percent * 2 - 100) * 255 / 100)
  const red = percent > 50 ? 255 : Math.floor((percent * 2) * 255 / 100)
  return `rgb(${red}, ${green}, 0)`;
} */

export const DrawOptimalRoute = (canvas, optimalRoute, backgroundName) => {

  for (let i = 0; i < optimalRoute.length - 1; i++) {
    const currentNode =  optimalRoute[i]
    const nextNode = optimalRoute[i + 1]

    // Draw lines for teleports
    DrawLineToCanvas(canvas, currentNode.origin.position, currentNode.destination.position, 'purple', backgroundName)

    // Draw lines for flying
    DrawLineToCanvas(canvas, currentNode.destination.position, nextNode.origin.position, 'cyan', backgroundName)

    // Draw points for used teleports
    
    DrawPointToCanvas(canvas, currentNode.origin.position, 5, 'yellow', backgroundName)
    DrawPointToCanvas(canvas, currentNode.destination.position, 5, 'yellow', backgroundName)
  }

  // Draw start and end points separately on top of other drawings
  DrawPointToCanvas(canvas, optimalRoute[0].origin.position, 6, 'green', backgroundName)
  DrawPointToCanvas(canvas, optimalRoute[optimalRoute.length - 1].origin.position, 6, 'red', backgroundName)
}

export default DrawOptimalRoute