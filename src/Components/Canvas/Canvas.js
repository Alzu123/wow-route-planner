import React, { useRef, useEffect, useState } from 'react'

import DrawCanvasElements from './DrawCanvasElements'

const defaultWidth = 1002
const defaultHeight = 668

const Canvas = (props) => {
  const [ canvasWidth, setCanvasWidth ] = useState(defaultWidth)
  const [ canvasHeight, setCanvasHeight ] = useState(defaultHeight)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const canvasBg = new Image()
    canvasBg.src = props.continent.image.default

    canvasBg.onload = () => {
      DrawCanvasElements(canvas, canvasBg, props.nodes, props.finalRoute, props.continent.name)
    }

    // This should be done some other way but not sure how. Redrawing after onload feels weird.
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    DrawCanvasElements(canvas, canvasBg, props.nodes, props.finalRoute, props.continent.name)

    // Scale canvas to screen
    const newCanvasHeight = canvas.clientHeight
    const scalingFactor = newCanvasHeight / defaultHeight
    const newCanvasWidth = defaultWidth * scalingFactor

    setCanvasWidth(newCanvasWidth)
    setCanvasHeight(newCanvasHeight)

  }, [props.continent, props.nodes, props.finalRoute])
  
  return (
  <div>
    <canvas width={canvasWidth} height={canvasHeight} ref={canvasRef} onClick={props.onClick}/>
  </div>
  )
}

export default Canvas