import WorldCoordinatesToCanvasCoordinates from "../Calculations/Coordinates/WorldCoordinatesToCanvasCoordinates"

export const DrawLineToCanvas = (canvas, startPosition, endPosition, fill, backgroundName) => {
  if (startPosition.continent.name !== backgroundName || endPosition.continent.name !== backgroundName) {
    return
  }

  const context = canvas.getContext('2d')
  const adjustedStart = WorldCoordinatesToCanvasCoordinates(canvas, startPosition)
  const adjustedEnd = WorldCoordinatesToCanvasCoordinates(canvas, endPosition)

  context.beginPath()
  context.strokeStyle = fill
  context.lineWidth = "5"
  context.moveTo(adjustedStart.x, adjustedStart.y)
  context.lineTo(adjustedEnd.x, adjustedEnd.y)
  context.stroke()
}

export default DrawLineToCanvas