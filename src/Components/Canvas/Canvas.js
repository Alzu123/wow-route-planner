import React, { useRef, useEffect, useState } from 'react'

import DrawCanvasElements from './DrawCanvasElements'

const Canvas = (props) => {
  const [ canvasWidth, setCanvasWidth ] = useState(0)
  const [ canvasHeight, setCanvasHeight ] = useState(0)
  const [ aspectRatio, setAspectRatio ] = useState(0)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const canvasBg = new Image()
    canvasBg.src = props.continent.image.default

    canvasBg.onload = () => {
      DrawCanvasElements(canvas, canvasBg, props.nodes, props.finalRoute, props.continent.name, props.startAndEnd)
      setAspectRatio(canvasBg.naturalWidth / canvasBg.naturalHeight)
    }

    // This should be done some other way but not sure how. Redrawing after onload feels weird.
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    DrawCanvasElements(canvas, canvasBg, props.nodes, props.finalRoute, props.continent.name, props.startAndEnd)

    // Scale canvas to screen
    const newCanvasHeight = canvas.clientHeight
    const newCanvasWidth = newCanvasHeight * aspectRatio

    setCanvasWidth(newCanvasWidth)
    setCanvasHeight(newCanvasHeight)

  }, [props.continent, props.nodes, props.finalRoute, props.startAndEnd, aspectRatio])
  
  return (
    <canvas width={canvasWidth} height={canvasHeight} ref={canvasRef} onClick={props.onClick}/>
  )
}

export default Canvas