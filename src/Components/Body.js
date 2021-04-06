import React, { useState } from 'react'
import NavigationSteps from './NavigationSteps'
import Canvas from './Canvas/Canvas'
import Position from './Position'
import NumberLabel from './NumberLabel'

import defaultTeleports from '../Data/TeleportDB'
import continents from '../Data/ContinentDB'
import PlayerInfo from '../Data/Player'

import RouteToDestination from '../Components/Calculations/RouteToDestination'
import MouseCoordinatesToWorldCoordinates from '../Components/Calculations/Coordinates/MouseCoordinatesToWorldCoordinates'
import ProcessTeleports from '../Data/Teleport Processing/ProcessTeleports'
import ToggleTeleport from '../Data/Teleport Processing/ToggleTeleport'
import Point from '../Data/Point'

import { Container, Row, Col} from 'react-bootstrap'
import ClickSelector from './ClickSelector'
import BackgroundSelector from './BackgroundSelector'

const Header = () => {
  const [ startPosition, setStartPosition ] = useState(PlayerInfo.position)
  const [ endPosition, setEndPosition ] = useState(new Point(58.6, 26.5, continents.EASTERN_KINGDOMS))
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

  const changeBackground = (event) => {
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
  
  const routeDetails = RouteToDestination(startPosition, endPosition, teleports)
  const nodes = routeDetails[0]
  const finalRoute = routeDetails[1][routeGoodness]


  return (
    <Container fluid id='body'>
      <Row className='full'>
        <Col id='left' xs={12} md={3} className='full'>
          <Row>
            <Col>
              <ClickSelector updateClickEditTarget={updateClickEditTarget} />
              <BackgroundSelector continent={continent} changeBackground={changeBackground}/>
              <Position pretext={'Player:'} position={startPosition}/>
              <Position pretext={'Destination:'} position={endPosition}/>
          </Col>
          </Row>
          <Row>
            <Col>
              <NumberLabel onClick={updateRouteGoodness} numRoutes={routeDetails[1].length - 1} />
            </Col>
          </Row>
          <Row>
            <Col>
              <NavigationSteps nodes={nodes} finalRoute={finalRoute} />
            </Col>
          </Row>
        </Col>

        <Col id='right' className='d-none d-sm-block overflow-hidden'>
          <Canvas onClick={updateStartOrEnd} teleports={teleports} nodes={nodes} finalRoute={finalRoute} continent={continent}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Header