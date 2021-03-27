import WorldCoordinatesToCanvasCoordinates from "../Calculations/WorldCoordinatesToCanvasCoordinates"

export const DrawLineToCanvas = (canvas, start, end, fill) => {
  const context = canvas.getContext('2d')
  const adjustedStart = WorldCoordinatesToCanvasCoordinates(canvas, start)
  const adjustedEnd = WorldCoordinatesToCanvasCoordinates(canvas, end)

  context.beginPath()
  context.strokeStyle = fill
  context.lineWidth = "5"
  context.moveTo(adjustedStart.x, adjustedStart.y)
  context.lineTo(adjustedEnd.x, adjustedEnd.y)
  context.stroke()
}

export default DrawLineToCanvas