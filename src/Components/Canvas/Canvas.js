import React, { useRef, useEffect } from 'react'

import DrawCanvasInitial from './DrawCanvasInitial'
import DrawOptimalRoute from './DrawOptimalRoute'
import DrawTeleports from './DrawTeleports'

import {Images} from '../../Data/ImageDB'

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

const Canvas = ({ onClick, onClickEditChange, teleports, nodes, finalRoute, bgImage, onBgChange }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const canvasBg = new Image()
    canvasBg.src = bgImage.file.default

    canvasBg.onload = () => {
      drawCanvasElements(canvas, canvasBg, teleports, nodes, finalRoute, bgImage.name)
    }

    // This should be done some other way but not sure how. Redrawing after onload feels weird.
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    drawCanvasElements(canvas, canvasBg, teleports, nodes, finalRoute, bgImage.name)

  }, [teleports, bgImage, nodes, finalRoute])
  
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
        {Images.map((image, i) => <option value={image.name} key={i}>{image.name}</option>)}
      </select>
  </div>
  )
}

export default Canvas