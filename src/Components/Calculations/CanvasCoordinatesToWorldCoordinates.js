export const CanvasCoordinatesToWorldCoordinates = ( canvas, coordinate ) => {
  const rect = canvas.getBoundingClientRect()
  
  return {
    x: coordinate.x / rect.width * 100,
    y: coordinate.y / rect.height * 100
  }
}

export default CanvasCoordinatesToWorldCoordinates