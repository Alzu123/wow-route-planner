import React, { useRef, useEffect } from 'react'

import DrawCanvasInitial from './DrawCanvasInitial'
import DrawOptimalRoute from './DrawOptimalRoute'
import DrawTeleports from './DrawTeleports'

import continents from '../../Data/ContinentDB'

const canvasHeight = 533
const canvasWidth = 800

const drawCanvasElements = (canvas, canvasBg, teleports, nodes, finalRoute, backgroundName) => {
  const context = canvas.getContext('2d')

  const bgHeight = canvasBg.naturalHeight
  const bgWidth = canvasBg.naturalWidth

  context.drawImage(canvasBg, 0, 0, bgWidth, bgHeight,
                              0, 0, canvas.width, canvas.height);
  DrawCanvasInitial(canvas)
  DrawTeleports(canvas, teleports, 'purple', 'purple', backgroundName)
  DrawOptimalRoute(canvas, nodes, finalRoute.nodes, backgroundName)
}

const Canvas = ({ onClick, onClickEditChange, teleports, nodes, finalRoute, continent, onBgChange }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const canvasBg = new Image()
    canvasBg.src = continent.image.default

    canvasBg.onload = () => {
      drawCanvasElements(canvas, canvasBg, teleports, nodes, finalRoute, continent.name)
    }

    // This should be done some other way but not sure how. Redrawing after onload feels weird.
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    drawCanvasElements(canvas, canvasBg, teleports, nodes, finalRoute, continent.name)

  }, [teleports, continent, nodes, finalRoute])
  
  return (
  <div>
    <canvas width={canvasWidth} height={canvasHeight} ref={canvasRef} onClick={onClick}/>
    <br></br>
    Clicks currently edit :
      <select id="select" onChange={onClickEditChange}>
        <option value="start">Start point</option>
        <option value="end">End point</option>
      </select>
    <br></br>
    Current background :
      <select id="select" onChange={onBgChange}>
        {continents.map((continent, i) => <option value={continent.name} key={i}>{continent.name}</option>)}
      </select>
  </div>
  )
}

export default Canvas