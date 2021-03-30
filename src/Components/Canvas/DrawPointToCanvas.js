import WorldCoordinatesToCanvasCoordinates from "../Calculations/Coordinates/WorldCoordinatesToCanvasCoordinates"

export const DrawPointToCanvas = (canvas, position, fill, backgroundName) => {
  if (position.continent !== backgroundName) {
    return
  }

  const context = canvas.getContext('2d')
  position = position.coordinates
  const adjustedCoordinates = WorldCoordinatesToCanvasCoordinates(canvas, position)

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