import DrawPointToCanvas from "./DrawPointToCanvas"
import DrawLineToCanvas from "./DrawLineToCanvas"

// Function from Stackoverflow (https://stackoverflow.com/a/18085357) modified to get red to green with steps
const getRedToGreen = (currentStep, totalSteps) => {

  const percent = currentStep / (totalSteps - 1) * 100
  const green = percent < 50 ? 255 : Math.floor(255 - (percent * 2 - 100) * 255 / 100)
  const red = percent > 50 ? 255 : Math.floor((percent * 2) * 255 / 100)
  return `rgb(${red}, ${green}, 0)`;
}

export const DrawOptimalRoute = (canvas, nodes, optimalRoute) => {
  //console.log(nodes)
  //console.log(optimalRoute)

  // Draw start and end points separately
  DrawPointToCanvas(canvas, nodes[0].origin, 'green')
  DrawPointToCanvas(canvas, nodes[nodes.length - 1].origin, 'red')

  for (let i = 0; i < optimalRoute.length - 1; i++) {
    const currentNode = nodes[optimalRoute[i]]
    const nextNode = nodes[optimalRoute[i + 1]]
    if (i !== 0) {
      DrawPointToCanvas(canvas, currentNode.origin, 'yellow')
      DrawPointToCanvas(canvas, currentNode.destination, 'blue')
    }
    DrawLineToCanvas(canvas, currentNode.destination, nextNode.origin, getRedToGreen(i, optimalRoute.length - 1))
  }
}

export default DrawOptimalRoute