import React, { useState, useRef, useEffect } from 'react'
import { nodes } from './Calculations/RouteToDestination'

const adjustToCanvas = (canvas, coordinate) => {
  const rect = canvas.getBoundingClientRect()
  return {
    x: coordinate.x - rect.left,
    y: coordinate.y - rect.top
  }
}

const Canvas = ({ drawEffects, drawPoint, drawCanvasLines }) => {
  const [coordinates, setCoordinates] = useState([])
  const [bgLoaded, setBgLoaded] = useState(false)

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
    
    console.log("about to draw image")
    console.log(canvasBg)
    canvasBg.onload = () => {
      console.log("tring to draw image")
      console.log(canvasBg)
      context.drawImage(canvasBg, 0, 0);
    }

    drawEffects(context)
    //drawCanvasLines(context, start, end)
    coordinates.forEach((coordinate) => {drawPoint(context, adjustToCanvas(canvas, coordinate))})
  }, [drawEffects, drawPoint, coordinates])
  
  return <canvas width="800" height="533" ref={canvasRef} onClick={handleCanvasClick}/>
}

export default Canvas