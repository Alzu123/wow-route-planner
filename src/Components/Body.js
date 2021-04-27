import React, { useState } from 'react'
import NavigationSteps from './NavigationSteps'
import Canvas from './Canvas/Canvas'
import NumberLabel from './NumberLabel'

import continents from '../Data/ContinentDB'
import PlayerInfo from '../Data/Player'

import RouteToDestination from '../Components/Calculations/RouteToDestination'
import MouseCoordinatesToWorldCoordinates from '../Components/Calculations/Coordinates/MouseCoordinatesToWorldCoordinates'
import ProcessTeleports from '../Data/Teleport Processing/ProcessTeleports'
import ToggleTeleports from '../Data/Teleport Processing/ToggleTeleports'
import Point from '../Data/Point'

import { Container, Row, Col } from 'react-bootstrap'
import TeleportsPanel from './TeleportsPanel'
import ConfigurationPanel from './ConfigurationPanel'
import InfoPanel from './InfoPanel'
import MapSettings from './MapSettings'

const Body = ({ showTeleports, teleports, setTeleports, showConfiguration, showInfo }) => {
  const [ startPosition, setStartPosition ] = useState(PlayerInfo.position)
  const [ endPosition, setEndPosition ] = useState(new Point(58.6, 26.5, continents.EASTERN_KINGDOMS))
  const [ editingStart, setEditingStart ] = useState(true)
  const [ continent, setContinent ] = useState(PlayerInfo.position.continent)
  const [ routeGoodness, setRouteGoodness ] = useState(1)
  const [ routeOrder, setRouteOrder ] = useState('preference')

  const changeBackground = (event) => {
    event.preventDefault()
    const dropdownValue = event.target.value
    setContinent(continents[dropdownValue])
  }

  const updateStartOrEnd = (event) => {
    event.preventDefault()
    const canvasAdjustedCoordinates = MouseCoordinatesToWorldCoordinates(event.target, { x: event.clientX, y: event.clientY })
    const targetContinent = continent
    const position = new Point(canvasAdjustedCoordinates.x, canvasAdjustedCoordinates.y, targetContinent)

    if (editingStart) {
      setStartPosition(position)
      setTeleports(ProcessTeleports(teleports, position))
    } else {
      setEndPosition(position)
    }

    setRouteGoodness(1)
  }

  const updateClickEditTarget = (event) => {
    if (event.target.id === "start-point") {
      setEditingStart(true)
    } else {
      setEditingStart(false)
    }
  }

  const toggleAvailability = (event) => {
    console.log(event)
    const listGroupItemId = event.target.parentNode.parentNode.id
    const teleportIds = [parseInt(listGroupItemId)]
    setTeleports(ToggleTeleports(teleports, teleportIds))
    setRouteGoodness(1)
  }

  const toggleTeleportsByRestriction = (event) => {
    const type = event.target.parentNode.parentNode.parentNode.id.toLowerCase()
    const value = event.target.parentNode.id
    const targetedTeleports = teleports.filter(teleport => teleport.restrictions[type] === value)
    const typeTeleports = teleports.filter(teleport => teleport.restrictions[type] !== '')
    const areTargetsEnabled = !targetedTeleports.some(teleport => !teleport.enabled)

    let toggledTeleports = teleports
    if (type !== 'profession' && !areTargetsEnabled) {
      // For other restrictions than profession, there can only be one active at once
      toggledTeleports = ToggleTeleports(toggledTeleports, typeTeleports.map(teleport => teleport.id), false)
    }
    toggledTeleports = ToggleTeleports(toggledTeleports, targetedTeleports.map(teleport => teleport.id), !areTargetsEnabled)

    setTeleports(toggledTeleports)
  }

  const updateRouteGoodness = (event) => {
    event.preventDefault();
    const newGoodness = parseFloat(event.target.value)

    if (isNaN(newGoodness)) {
      setRouteGoodness(1)
    } else {
      setRouteGoodness(newGoodness)
    }
  }

  const updateConfiguration = (event) => {
    event.preventDefault()
    const optionsElement = document.getElementById('route-preference')
    const routePreference = optionsElement.options[optionsElement.selectedIndex].value

    setRouteOrder(routePreference)
  }

  // This is now ran on every change of the site. Should probably be changed
  const routeDetails = RouteToDestination(startPosition, endPosition, teleports)
  const nodes = routeDetails.nodes
  const candidateRoutes = routeDetails.candidateRoutes.slice(0, 50)
  const orderedRoutes = candidateRoutes.sort((a, b) => (a[routeOrder] > b[routeOrder]) ? 1 : -1)
  const finalRoute = orderedRoutes[routeGoodness - 1]


  return (
    <Container fluid id='body'>
      <TeleportsPanel show={showTeleports} teleports={teleports} onClick={toggleAvailability}/>
      <ConfigurationPanel show={showConfiguration} onClick={toggleTeleportsByRestriction} teleports={teleports} updateConfiguration={updateConfiguration} defaultPreference={routeOrder}/>
      <InfoPanel show={showInfo}/>
      <MapSettings updateClickEditTarget={updateClickEditTarget} continent={continent} changeBackground={changeBackground}/>

      <Row className='full'>
        <Col id='left' xs={12} md={4}>
          <Row>
            <Col>
              Add here textboxes for entering start and end points. The default values get the current position so the old position element is no longer needed.
            </Col>
          </Row>
          <Row>
            <Col>
              <NumberLabel value={routeGoodness} onClick={updateRouteGoodness} numRoutes={candidateRoutes.length} />
              <NavigationSteps onClick={toggleAvailability} finalRoute={finalRoute} />
            </Col>
          </Row>
        </Col>

        <Col id='right' className='d-none d-sm-block overflow-hidden'>
          <Canvas onClick={updateStartOrEnd} nodes={nodes} finalRoute={finalRoute} continent={continent}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Body