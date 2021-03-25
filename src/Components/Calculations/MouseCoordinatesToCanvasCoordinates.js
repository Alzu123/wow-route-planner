export const MouseCoordinatesToCanvasCoordinates = ( canvas, coordinate ) => {
  const rect = canvas.getBoundingClientRect()
  
  return {
    x: coordinate.x - rect.left,
    y: coordinate.y - rect.top
  }
}

export default MouseCoordinatesToCanvasCoordinates