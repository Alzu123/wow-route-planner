import DrawStartAndEndToCanvas from './DrawStartAndEndToCanvas'
import DrawOptimalRoute from './DrawOptimalRoute'
import DrawTeleports from './DrawTeleports'

const DrawCanvasElements = (canvas, canvasBg, nodes, finalRoute, backgroundName, startAndEnd) => {
  const context = canvas.getContext('2d')

  const bgHeight = canvasBg.naturalHeight
  const bgWidth = canvasBg.naturalWidth
  
  context.drawImage(canvasBg, 0, 0, bgWidth, bgHeight,
                              0, 0, canvas.width, canvas.height);

  DrawTeleports(canvas, nodes, 'purple', 'purple', backgroundName)
  DrawOptimalRoute(canvas, finalRoute, backgroundName)
  DrawStartAndEndToCanvas(canvas, startAndEnd, backgroundName)
  
}

export default DrawCanvasElements