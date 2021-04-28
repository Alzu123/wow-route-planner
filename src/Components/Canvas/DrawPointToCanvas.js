import WorldCoordinatesToCanvasCoordinates from "../Calculations/Coordinates/WorldCoordinatesToCanvasCoordinates"

export const DrawPointToCanvas = (canvas, position, size, fill, backgroundName, text) => {
  if (!position) {
    return
  }
  
  if (position.continent.name !== backgroundName) {
    return
  }

  const context = canvas.getContext('2d')
  const adjustedCoordinates = WorldCoordinatesToCanvasCoordinates(canvas, position)

  context.fillStyle = '#000000'
  context.beginPath()
  context.arc(adjustedCoordinates.x, adjustedCoordinates.y, size, 0, 2*Math.PI)
  context.fill()

  context.fillStyle = fill
  context.beginPath()
  context.arc(adjustedCoordinates.x, adjustedCoordinates.y, size - 1, 0, 2*Math.PI)
  context.fill()

  // Optional text. Mostly for debugging
  if (text) {
    text = text.toString().slice(0, 5);
    context.fillStyle = '#000000'
    context.font = 'bold 16px Arial'
    context.textAlign = "center";
    context.fillText(text, adjustedCoordinates.x, adjustedCoordinates.y + 20)
  }
}

export default DrawPointToCanvas