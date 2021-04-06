import DrawCanvasInitial from './DrawCanvasInitial'
import DrawOptimalRoute from './DrawOptimalRoute'
import DrawTeleports from './DrawTeleports'

const DrawCanvasElements = (canvas, canvasBg, teleports, nodes, finalRoute, backgroundName) => {
  const context = canvas.getContext('2d')

  const bgHeight = canvasBg.naturalHeight
  const bgWidth = canvasBg.naturalWidth

  context.drawImage(canvasBg, 0, 0, bgWidth, bgHeight,
                              0, 0, canvas.width, canvas.height);
  DrawCanvasInitial(canvas)
  DrawTeleports(canvas, teleports, 'purple', 'purple', backgroundName)
  DrawOptimalRoute(canvas, nodes, finalRoute.nodes, backgroundName)
}

export default DrawCanvasElements