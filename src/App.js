import React, { useState } from 'react'
import Map from './Components/Map'
import CoordinatePointCreator from './Components/Calculations/CoordinatePointCreator'
import Point from './Components/Point'
import NavigationSteps from './Components/NavigationSteps'
import Canvas from './Components/Canvas/Canvas'
import Teleports from './Components/Teleports'

import {defaultTeleports} from './Data/TeleportDB'
import {RouteToDestination} from './Components/Calculations/RouteToDestination'
import MouseCoordinatesToWorldCoordinates from './Components/Calculations/MouseCoordinatesToWorldCoordinates'

const App = () => {
  const [ startPoint, setStartPoint ] = useState({x: 63.4, y: 36.7})
  const [ endPoint, setEndPoint ] = useState({x: 53.4, y: 89.9})
  const [ newX, setNewX ] = useState('')
  const [ newY, setNewY ] = useState('')
  const [ editingStart, setEditingStart ] = useState(true)
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

  // Updates the start point based on clicks on canvas
  const updateStartPoint = (event) => {
    event.preventDefault()
    const canvasAdjustedCoordinates = MouseCoordinatesToWorldCoordinates(event.target, { x: event.clientX, y: event.clientY })

    if (editingStart) {
      setStartPoint(canvasAdjustedCoordinates)
      updatePlayerTeleports(canvasAdjustedCoordinates.x, canvasAdjustedCoordinates.y)
    } else {
      setEndPoint(canvasAdjustedCoordinates)
    }
  }

  const updateClickEditTarget = (event) => {
    event.preventDefault()
    console.log(event)
    if (event.target.value === "start") {
      setEditingStart(true)
    } else {
      setEditingStart(false)
    }
  }
  
  const routeDetails = RouteToDestination(startPoint, endPoint, teleports)
  const nodes = routeDetails[0]
  const finalRoute = routeDetails[1]

  return (
    <div>
      <h1>Canvas</h1>
      <Canvas onClick={updateStartPoint} onDropdownChange={updateClickEditTarget} routeDetails={routeDetails} /> 

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
      <NavigationSteps nodes={nodes} finalRoute={finalRoute} />

      <h2>List of teleports</h2>
      <Teleports teleports={teleports}/>

      <h1>Map</h1>
      <Map />
    </div>
  )
}

export default App