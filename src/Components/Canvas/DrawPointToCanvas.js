import WorldCoordinatesToCanvasCoordinates from "../Calculations/WorldCoordinatesToCanvasCoordinates"

export const DrawPointToCanvas = (canvas, location, fill) => {
  const context = canvas.getContext('2d')
  const adjustedCoordinates = WorldCoordinatesToCanvasCoordinates(canvas, location)

  context.fillStyle = '#000000'
  context.beginPath()
  context.arc(adjustedCoordinates.x, adjustedCoordinates.y, 5, 0, 2*Math.PI)
  context.fill()

  context.fillStyle = fill
  context.beginPath()
  context.arc(adjustedCoordinates.x, adjustedCoordinates.y, 4, 0, 2*Math.PI)
  context.fill()
}

export default DrawPointToCanvas