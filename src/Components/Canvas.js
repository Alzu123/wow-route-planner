import React, { useState, useRef, useEffect } from 'react'

import {RouteToDestination} from './Calculations/RouteToDestination'
import {defaultTeleports} from './../Data/TeleportDB.js'
import WorldCoordinatesToCanvasCoordinates from './Calculations/WorldCoordinatesToCanvasCoordinates'
import MouseCoordinatesToCanvasCoordinates from './Calculations/MouseCoordinatesToCanvasCoordinates'

const adjustToCanvas = (canvas, coordinate) => {
  const rect = canvas.getBoundingClientRect()
  return {
    x: coordinate.x - rect.left,
    y: coordinate.y - rect.top
  }
}


const Canvas = ({ drawEffects, drawPoint, drawLine }) => {
  const [coordinates, setCoordinates] = useState([])
  const [bgLoaded, setBgLoaded] = useState(false) // If this line is removed, the image won't load...

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
    
    console.log("about to draw image")
    console.log(canvasBg)
    canvasBg.onload = () => {
      console.log("tring to draw image")
      console.log(canvasBg)
      context.drawImage(canvasBg, 0, 0);

      drawEffects(context)
    }

    coordinates.forEach((coordinate) => {drawPoint(context, MouseCoordinatesToCanvasCoordinates(canvas, coordinate))})
    console.log(coordinates)
    console.log()
  }, [drawEffects, drawPoint, drawLine, coordinates])
  
  return <canvas width="800" height="533" ref={canvasRef} onClick={handleCanvasClick}/>
}

export default Canvas