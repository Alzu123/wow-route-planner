import React, { useState } from 'react'
import Point from './Components/Point'
import NavigationSteps from './Components/NavigationSteps'
import Canvas from './Components/Canvas/Canvas'
import Teleports from './Components/Teleports'

import {defaultTeleports} from './Data/TeleportDB'
import {RouteToDestination} from './Components/Calculations/RouteToDestination'
import MouseCoordinatesToWorldCoordinates from './Components/Calculations/MouseCoordinatesToWorldCoordinates'

import {Images} from './Data/ImageDB'

import GenerateTeleportJson from './Data/GenerateTeleportJson'

const App = () => {
  const [ startPosition, setStartPosition ] = useState({coordinates: {x: 63.4, y: 36.7}, continent: "Kalimdor"})
  const [ endPosition, setEndPosition ] = useState({coordinates: {x: 39.63, y: 67.2}, continent: "Eastern Kingdoms"})
  const [ editingStart, setEditingStart ] = useState(true)
  const [ bgImage, setbgImage ] = useState(Images[0])
  const [ teleports, setTeleports ] = useState(defaultTeleports)

  const updatePlayerTeleports = (position) => {
    const newX = position.coordinates.x
    const newY = position.coordinates.y
    const newContinent = position.continent
    setTeleports(teleports.map(teleport => teleport.fromPlayer ? {...teleport, origin: {...teleport.origin, coordinates: {x: newX, y: newY}, continent: newContinent}} : teleport))
  }

  const changeBg = (event) => {
    event.preventDefault()
    let dropdownValue = event.target.value
    const newBg = Images.filter(image => image.name === dropdownValue)[0]
    setbgImage(newBg)
  }

  // Updates the start point based on clicks on canvas
  const updateStartOrEnd = (event) => {
    event.preventDefault()
    const canvasAdjustedCoordinates = MouseCoordinatesToWorldCoordinates(event.target, { x: event.clientX, y: event.clientY })
    const targetContinent = bgImage.name
    const position = {coordinates: canvasAdjustedCoordinates, continent: targetContinent}

    if (editingStart) {
      setStartPosition(position)
      updatePlayerTeleports(position)
    } else {
      setEndPosition(position)
    }
  }

  const updateClickEditTarget = (event) => {
    event.preventDefault()
    if (event.target.value === "start") {
      setEditingStart(true)
    } else {
      setEditingStart(false)
    }
  }
  
  const routeDetails = RouteToDestination(startPosition, endPosition, teleports)
  const nodes = routeDetails[0]
  const finalRoute = routeDetails[1]

  GenerateTeleportJson()

  return (
    <div>
      <h1>Canvas</h1>
      <Canvas onClick={updateStartOrEnd} onClickEditChange={updateClickEditTarget} routeDetails={routeDetails} bgImage={bgImage} onBgChange={changeBg}/> 

      Player: <Point point={startPosition.coordinates}/> in {startPosition.continent}
      <br></br>
      Destination: <Point point={endPosition.coordinates}/> in {endPosition.continent}

      <h2>Route</h2>
      <NavigationSteps nodes={nodes} finalRoute={finalRoute} />

      <h2>List of teleports</h2>
      <Teleports teleports={teleports}/>
    </div>
  )
}

export default App