import WorldCoordinatesToCanvasCoordinates from "../Calculations/Coordinates/WorldCoordinatesToCanvasCoordinates"

export const DrawImageToCanvas = (canvas, position, size, image, backgroundName) => {
  if (position.continent.name !== backgroundName) {
    return
  }

  const context = canvas.getContext('2d')
  const adjustedCoordinates = WorldCoordinatesToCanvasCoordinates(canvas, position)

  context.drawImage(image, adjustedCoordinates.x - size/2, adjustedCoordinates.y - size/2, size, size)
}

export default DrawImageToCanvas