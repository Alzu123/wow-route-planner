import React, { useState } from 'react'
import Position from './Components/Position'
import NavigationSteps from './Components/NavigationSteps'
import Canvas from './Components/Canvas/Canvas'
import Teleports from './Components/Teleports'
import NumberLabel from './Components/NumberLabel'

import defaultTeleports from './Data/TeleportDB'
import continents from './Data/ContinentDB'
import PlayerInfo from './Data/Player'

import {RouteToDestination} from './Components/Calculations/RouteToDestination'
import MouseCoordinatesToWorldCoordinates from './Components/Calculations/Coordinates/MouseCoordinatesToWorldCoordinates'
import {ProcessTeleports} from './Data/Teleport Processing/ProcessTeleports'

import GenerateTeleportJson from './Data/Teleport Processing/GenerateTeleportJson'
import ToggleTeleport from './Data/Teleport Processing/ToggleTeleport'
import Point from './Data/Point'

const App = () => {
  const [ startPosition, setStartPosition ] = useState(PlayerInfo.position)
  const [ endPosition, setEndPosition ] = useState(new Point(54.5, 41.3, continents.NAZJATAR))
  const [ editingStart, setEditingStart ] = useState(true)
  const [ continent, setContinent ] = useState(PlayerInfo.position.continent)
  const [ teleports, setTeleports ] = useState(ProcessTeleports(defaultTeleports))
  const [ routeGoodness, setRouteGoodness ] = useState(0)

  const updatePlayerTeleports = (position) => {
    const newX = position.x
    const newY = position.y
    const newContinent = position.continent

    const newPosition = {
      coordinates: {
        x: newX,
        y: newY,
      },
      continent: newContinent
    }

    const processedTeleports = ProcessTeleports(teleports, newPosition)
    setTeleports(processedTeleports)
  }

  const changeBg = (event) => {
    event.preventDefault()
    const dropdownValue = event.target.value
    setContinent(continents[dropdownValue])
  }

  // Updates the start point based on clicks on canvas
  const updateStartOrEnd = (event) => {
    event.preventDefault()
    const canvasAdjustedCoordinates = MouseCoordinatesToWorldCoordinates(event.target, { x: event.clientX, y: event.clientY })
    const targetContinent = continent
    const position = new Point(canvasAdjustedCoordinates.x, canvasAdjustedCoordinates.y, targetContinent)
    //console.log('old end:', endPosition, 'newpos:', position)

    if (editingStart) {
      setStartPosition(position)
      updatePlayerTeleports(position)
    } else {
      setEndPosition(position)
    }

    setRouteGoodness(0)
  }

  const updateClickEditTarget = (event) => {
    event.preventDefault()
    if (event.target.value === "start") {
      setEditingStart(true)
    } else {
      setEditingStart(false)
    }
  }

  const toggleAvailability = (event) => {
    const teleportID = parseInt(event.target.parentNode.parentNode.id)
    setTeleports(ToggleTeleport(teleports, teleportID))
  }

  const updateRouteGoodness = (event) => {
    event.preventDefault();
    const newGoodness = parseFloat(event.target.value)

    if (isNaN(newGoodness)) {
      setRouteGoodness(0)
    } else {
      setRouteGoodness(newGoodness)
    }
  }

  //GenerateTeleportJson()
  
  //updatePlayerTeleports(startPosition)
  const routeDetails = RouteToDestination(startPosition, endPosition, teleports)
  const nodes = routeDetails[0]
  const finalRoute = routeDetails[1][routeGoodness]

  return (
    <div>
      <h1>Route</h1>
      <NumberLabel onClick={updateRouteGoodness} numRoutes={routeDetails[1].length - 1} />
      <table>
        <tbody>
          <tr>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>Player <Position position={startPosition}/></td>
            <td>Destination: <Position position={endPosition}/></td>
          </tr>
          <tr>
            <td><Canvas onClick={updateStartOrEnd} onClickEditChange={updateClickEditTarget} teleports={teleports} nodes={nodes} finalRoute={finalRoute} continent={continent} onBgChange={changeBg}/> </td>
            <td><NavigationSteps nodes={nodes} finalRoute={finalRoute} /></td>
          </tr>
        </tbody>
      </table>
      

      <h2>List of teleports</h2>
      <Teleports teleports={teleports} onClick={toggleAvailability}/>
    </div>
  )
}

export default App