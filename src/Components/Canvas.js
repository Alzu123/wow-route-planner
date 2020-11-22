import React, { useState, useRef, useEffect } from 'react'

const adjustToCanvas = (canvas, coordinate) => {
  const rect = canvas.getBoundingClientRect()
  return {
    x: coordinate.x - rect.left,
    y: coordinate.y - rect.top
  }
}

const Canvas = ({ drawBg, drawPoint }) => {
  const [coordinates, setCoordinates] = useState([])

  const handleCanvasClick = (event) => {
    const currentCoord = { x: event.clientX, y: event.clientY }
    setCoordinates([...coordinates, currentCoord])
  }

  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.width = 800
    canvas.height = 533

    drawBg(context)
    coordinates.forEach((coordinate) => {drawPoint(context, adjustToCanvas(canvas, coordinate))})
  }, [drawBg, drawPoint, coordinates])
  
  return <canvas ref={canvasRef} onClick={handleCanvasClick}/>
}

export default Canvas