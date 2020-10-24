import React, { useState, useRef, useEffect } from 'react'

const Canvas = () => {
    const [coordinates, setCoordinates] = useState([])
  
    const handleCanvasClick = (event) => {
      const currentCoord = { x: event.clientX, y: event.clientY }
      setCoordinates([...coordinates, currentCoord])
    }

    const canvasBg = new Image()
    canvasBg.src = '../Images/Kalimdor.jpg'
    console.log(canvasBg)

    const draw = ctx => {
        console.log("a")
        canvasBg.onload = function() {
            console.log("b")
            ctx.fillStyle = 'blue'
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            ctx.drawImage(canvasBg, 0, 0)
        }
    }

    const drawDots = (ctx, location) => {
        ctx.fillStyle = 'red';
        ctx.beginPath()
        ctx.arc(location.x, location.y, 5, 0, 2*Math.PI)
        ctx.fill()
    }


    const canvasRef = useRef(null)

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        canvasBg.onload = function() {
            console.log("b")
            context.drawImage(canvasBg, 0, 0)
        }
        
        draw(context)
        coordinates.forEach((coordinate) => {drawDots(context, coordinate)})
      }, [draw, drawDots, canvasBg, coordinates])

    return (
        <canvas ref={canvasRef} onClick={handleCanvasClick} />
    )
}

export default Canvas