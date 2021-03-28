export const DrawCanvasInitial = (canvas) => {
  const context = canvas.getContext('2d')

  // Draw canvas border
  context.strokeStyle = '#000000'
  context.beginPath();
  context.lineWidth = '3';
  context.rect(0, 0, context.canvas.width, context.canvas.height);
  context.stroke();
}

export default DrawCanvasInitial