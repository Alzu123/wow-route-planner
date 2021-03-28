import WorldCoordinatesToCanvasCoordinates from "../Calculations/WorldCoordinatesToCanvasCoordinates"

export const DrawLineToCanvas = (canvas, startPosition, endPosition, fill, backgroundName) => {
  if (startPosition.continent !== backgroundName || endPosition.continent !== backgroundName) {
    return
  }

  const context = canvas.getContext('2d')
  const adjustedStart = WorldCoordinatesToCanvasCoordinates(canvas, startPosition.coordinates)
  const adjustedEnd = WorldCoordinatesToCanvasCoordinates(canvas, endPosition.coordinates)

  context.beginPath()
  context.strokeStyle = fill
  context.lineWidth = "5"
  context.moveTo(adjustedStart.x, adjustedStart.y)
  context.lineTo(adjustedEnd.x, adjustedEnd.y)
  context.stroke()
}

export default DrawLineToCanvas