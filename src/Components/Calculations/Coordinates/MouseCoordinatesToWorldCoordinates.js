export const MouseCoordinatesToWorldCoordinates = ( canvas, coordinate ) => {
  const rect = canvas.getBoundingClientRect()
  
  return {
    x: (coordinate.x - rect.left) / rect.width * 100,
    y: (coordinate.y - rect.top) / rect.height * 100
  }
}

export default MouseCoordinatesToWorldCoordinates