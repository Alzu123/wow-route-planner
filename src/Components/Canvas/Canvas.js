import React, { useRef, useEffect } from 'react'

import DrawCanvasInitial from './DrawCanvasInitial'
import DrawOptimalRoute from './DrawOptimalRoute'
import DrawTeleports from './DrawTeleports'


const Canvas = ({ onClick, onDropdownChange, routeDetails }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    // For some reason, I can't get the image to load from the file but only from a HTML element. Figure out a solution to this.
    // TODO: Add possibility to switch image on the go
    const canvasBg = document.getElementById('Kalimdor')
    // const canvasBg = new Image()
    // canvasBg.src = '../Data/Images/Kalimdor.jpg'
    canvasBg.onload = () => {
      context.drawImage(canvasBg, 0, 0);
      DrawCanvasInitial(context)
      DrawTeleports(canvas, 'green', 'purple')
      DrawOptimalRoute(canvas, routeDetails[0], routeDetails[1])
    }

    // This should be done some other way but not sure how. Drawing an image after separately from onload feels weird.
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(canvasBg, 0, 0);
    DrawTeleports(canvas, 'green', 'purple')
    DrawOptimalRoute(canvas, routeDetails[0], routeDetails[1])

  }, [routeDetails])
  
  return (
  <div>
    <canvas width="800" height="533" ref={canvasRef} onClick={onClick}/>
    <br></br>
    Clicks currently edit :
      <select id="select" onChange={onDropdownChange}>
        <option value="start">Start point</option>
        <option value="end">End point</option>
      </select>
  </div>
  )
}

export default Canvas