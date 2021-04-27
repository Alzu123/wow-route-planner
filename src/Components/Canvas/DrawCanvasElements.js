import DrawCanvasInitial from './DrawCanvasInitial'
import DrawOptimalRoute from './DrawOptimalRoute'
import DrawTeleports from './DrawTeleports'

const DrawCanvasElements = (canvas, canvasBg, nodes, finalRoute, backgroundName) => {
  const context = canvas.getContext('2d')

  const bgHeight = canvasBg.naturalHeight
  const bgWidth = canvasBg.naturalWidth

  context.drawImage(canvasBg, 0, 0, bgWidth, bgHeight,
                              0, 0, canvas.width, canvas.height);

  DrawCanvasInitial(canvas)
  DrawTeleports(canvas, nodes, 'purple', 'purple', backgroundName)
  if (finalRoute) {
    DrawOptimalRoute(canvas, finalRoute.nodes, backgroundName)
  } else {
    console.log('lol')
    DrawOptimalRoute(canvas, [nodes[0], nodes[nodes.length - 1]], backgroundName, false)
  }
  
}

export default DrawCanvasElements