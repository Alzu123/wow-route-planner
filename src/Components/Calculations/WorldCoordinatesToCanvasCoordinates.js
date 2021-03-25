export const WorldCoordinatesToCanvasCoordinates = ( canvas, coordinate ) => {
  const rect = canvas.getBoundingClientRect()
  
  return {
    x: rect.width * coordinate.x / 100,
    y: rect.height * coordinate.y / 100
  }
}

export default WorldCoordinatesToCanvasCoordinates