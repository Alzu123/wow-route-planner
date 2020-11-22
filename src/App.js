import React, { useState } from 'react'
import Map from './Components/Map'
import CoordinatePointCreator from './Components/Calculations/CoordinatePointCreator'
import Point from './Components/Point'
import RouteToDestination from './Components/Calculations/RouteToDestination'
import Canvas from './Components/Canvas'

const App = () => {
  const [ startPoint, setStartPoint ] = useState({x: 63.4, y: 36.7})
  const [ newX, setNewX ] = useState('')
  const [ newY, setNewY ] = useState('')
  const [ endPoint, setEndPoint ] = useState({x: 53.4, y: 89.9})

  const defaultTeleports = [
    {
      name: "Orgrimmar to Uldum",
      id: 1,
      origin: {x: 58.3, y: 43.3},
      destination: {x: 48.6, y: 87.4},
      fromPlayer: false
    },
    {
      name: "Dreamgrove to Feralas",
      id: 2,
      origin: {x: startPoint.x, y: startPoint.y},
      destination: {x: 40.3, y: 63.1},
      fromPlayer: true
    },
    {
      name: "Orgrimmar to Mount Hyjal",
      id: 3,
      origin: {x: 58.3, y: 43.3},
      destination: {x: 53.8, y: 27.6},
      fromPlayer: false
    },
    {
      name: "Dreamgrove to Moonglade",
      id: 4,
      origin: {x: startPoint.x, y: startPoint.y},
      destination: {x: 52.9, y: 17.1},
      fromPlayer: true
    },
    {
      name: "Hearthstone to Orgrimmar",
      id: 5,
      origin: {x: startPoint.x, y: startPoint.y},
      destination: {x: 58.3, y: 43.3},
      fromPlayer: true
    },
    {
      name: "Orgrimmar to Caverns of Time",
      id: 6,
      origin: {x: 58.3, y: 43.3},
      destination: {x: 57.3, y: 84.3},
      fromPlayer: true
    },
  ]
  const [ teleports, setTeleports ] = useState(defaultTeleports)

  const updatePlayerTeleports = (newX, newY) => {
    setTeleports(teleports.map(teleport => teleport.fromPlayer ? {...teleport, origin: {x: newX, y: newY}} : teleport))
  }

  // ==================================
  // CANVAS DRAWING FUNCTIONS
  // ==================================
  // const canvasBg = document.getElementById('Kalimdor')
  const canvasBg = new Image()
  canvasBg.src = '../Data/Images/Kalimdor.jpg'
  console.log(canvasBg)

  const drawCanvasBorder = (context) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    context.fillStyle = '#000000'

    // Draw background image
    canvasBg.onload = () => {
      context.drawImage(canvasBg, 0, 0);
    }
    
    
    // Draw borders
    context.beginPath();
    context.lineWidth = '3';
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.stroke();
  }

  const drawCanvasPoints = (context, location) => {
    context.fillStyle = '#000000'
    context.beginPath()
    context.arc(location.x, location.y, 20, 0, 2*Math.PI)
    context.fill()
  }

  const updatePoint = (event) => {
    event.preventDefault()

    if (event.target.elements["select"].value === "start") {
      setStartPoint({x: newX, y: newY})
      updatePlayerTeleports(newX, newY)
    } else {
      setEndPoint({x: newX, y: newY})
    }

    setNewX('')
    setNewY('')
  }

  const handleXChange = (event) => {
    setNewX(event.target.value)
  }

  const handleYChange = (event) => {
    setNewY(event.target.value)
  }

  return (
    <div>
      <h2>Canvas</h2>
      <Canvas drawBg={drawCanvasBorder} drawPoint={drawCanvasPoints}/> 

      <h1>Calculations</h1>
      Create start or end point
      <CoordinatePointCreator
        onSubmit={updatePoint}
        newX={newX}
        handleXChange={handleXChange}
        newY={newY}
        handleYChange={handleYChange}
      />

      Player: <Point point={startPoint}/>
      Destination <Point point={endPoint}/>


      <h2>Route</h2>
      <RouteToDestination startPoint={startPoint} endPoint={endPoint} teleports={teleports}/>

      <h1>Map</h1>
      <Map />
    </div>
  )
}

export default App