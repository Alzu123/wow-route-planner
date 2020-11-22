import React, { useState } from 'react'
import Map from './Components/Map'
import CoordinatePointCreator from './Components/Calculations/CoordinatePointCreator'
import Point from './Components/Point'
import NavigationSteps from './Components/NavigationSteps'
import Canvas from './Components/Canvas'
import Teleports from './Components/Teleports'

import {defaultTeleports} from './Data/TeleportDB.js'
import {RouteToDestination} from './Components/Calculations/RouteToDestination'

const App = () => {
  const [ startPoint, setStartPoint ] = useState({x: 63.4, y: 36.7})
  const [ newX, setNewX ] = useState('')
  const [ newY, setNewY ] = useState('')
  const [ endPoint, setEndPoint ] = useState({x: 53.4, y: 89.9})


  const [ teleports, setTeleports ] = useState(defaultTeleports)

  const updatePlayerTeleports = (newX, newY) => {
    setTeleports(teleports.map(teleport => teleport.fromPlayer ? {...teleport, origin: {x: newX, y: newY}} : teleport))
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

  
  const routeDetails = RouteToDestination(startPoint, endPoint, teleports)
  const nodes = routeDetails[0]
  const finalRoute = routeDetails[1]

  // ==================================
  // CANVAS DRAWING FUNCTIONS
  // ==================================
  const drawCanvasBorder = (context) => {
    // Draw borders
    context.fillStyle = '#000000'
    context.beginPath();
    context.lineWidth = '3';
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.stroke();
  }

  const drawCanvasPoints = (context, location) => {
    context.fillStyle = '#000000'
    context.beginPath()
    context.arc(location.x, location.y, 5, 0, 2*Math.PI)
    context.fill()

    context.fillStyle = 'red'
    context.beginPath()
    context.arc(location.x, location.y, 4, 0, 2*Math.PI)
    context.fill()
  }

  const drawCanvasLines = (context, start, end) => {
    context.beginPath()
    context.fillStyle = '#000000'
    context.lineWidth = "5"
    context.moveTo(start.x, start.y)
    context.lineTo(end.x, end.y)
    context.stroke()
  }

  return (
    <div>
      <h2>Canvas</h2>
      <Canvas drawEffects={drawCanvasBorder} drawPoint={drawCanvasPoints} drawLine={drawCanvasLines}/> 

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

      <Teleports teleports={teleports}/>


      <h2>Route</h2>
      <NavigationSteps nodes={nodes} finalRoute={finalRoute} />

      <h1>Map</h1>
      <Map />
    </div>
  )
}

export default App