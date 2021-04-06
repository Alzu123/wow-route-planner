import React, { useRef, useEffect, useState } from 'react'

import DrawCanvasElements from './DrawCanvasElements'

import continents from '../../Data/ContinentDB'

const defaultHeight = 533
const defaultWidth = 800

const Canvas = (props) => {
  const [ a, setA ] = useState(defaultWidth)
  const [ b, setB ] = useState(defaultHeight)
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const canvasBg = new Image()
    canvasBg.src = props.continent.image.default

    canvasBg.onload = () => {
      DrawCanvasElements(canvas, canvasBg, props.teleports, props.nodes, props.finalRoute, props.continent.name)
    }

    // This should be done some other way but not sure how. Redrawing after onload feels weird.
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    DrawCanvasElements(canvas, canvasBg, props.teleports, props.nodes, props.finalRoute, props.continent.name)

    // Scale canvas to screen
    const newCanvasHeight = canvas.clientHeight
    const scalingFactor = newCanvasHeight / defaultHeight
    const newCanvasWidth = defaultWidth * scalingFactor

    console.log('newCanvasWidth', newCanvasWidth)
  
    //context.canvas.width = newCanvasWidth
    //context.canvas.height = newCanvasHeight

    setA(newCanvasWidth)
    setB(newCanvasHeight)

  }, [props.teleports, props.continent, props.nodes, props.finalRoute])
  
  return (
  <div>
    <canvas width={a} height={b} ref={canvasRef} onClick={props.onClick}/>
  </div>
  )
}

export default Canvas