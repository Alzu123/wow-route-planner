export const DrawCanvasInitial = (context) => {
  // Mock variables
  //const startPoint = {x: 63.4, y: 36.7}
  //const endPoint = {x: 53.4, y: 89.9}
  //const nodes = [{origin: {x: 63.4, y: 36.7}, destination: {x: 63.4, y: 36.7}}, {origin: {x: 58.3, y: 43.3}, destination: {x: 48.6, y: 87.4}}]

  // Draw borders
  context.strokeStyle = '#000000'
  context.beginPath();
  context.lineWidth = '3';
  context.rect(0, 0, context.canvas.width, context.canvas.height);
  context.stroke();
}

export default DrawCanvasInitial