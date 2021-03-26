import React, { useState, useRef, useEffect } from 'react'

import DrawCanvasInitial from './DrawCanvasInitial'
import DrawPointToCanvas from './DrawPointToCanvas'
import DrawOptimalRoute from './DrawOptimalRoute'
import MouseCoordinatesToWorldCoordinates from '../Calculations/MouseCoordinatesToWorldCoordinates'


const Canvas = ({ routeDetails }) => {
  const [coordinates, setCoordinates] = useState([])

  // Adds point to canvas on mouse click, i.e. adds mouse click coordinates to coordinates
  const handleCanvasClick = (event) => {
    const currentCoord = { x: event.clientX, y: event.clientY }
    setCoordinates([...coordinates, currentCoord])
  }

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
      DrawOptimalRoute(canvas, routeDetails[0], routeDetails[1])
    }

    const adjustedCoordinates = coordinates.map(coordinate => MouseCoordinatesToWorldCoordinates(canvas, coordinate))

    adjustedCoordinates.forEach((coordinate) => {DrawPointToCanvas(canvas, coordinate)})
    DrawOptimalRoute(canvas, routeDetails[0], routeDetails[1])

  }, [routeDetails, coordinates])
  
  return (
  <div>
    <canvas width="800" height="533" ref={canvasRef} onClick={handleCanvasClick}/>
    <button onClick={handleCanvasClick}>DrawOptimalRoute</button>
  </div>
  )
}

export default Canvas