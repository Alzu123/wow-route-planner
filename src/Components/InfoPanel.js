import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { CANVAS_ACTIVE_TELEPORT_COLOR, CANVAS_END_COLOR, CANVAS_START_COLOR, CANVAS_TELEPORT_COLOR, CANVAS_TRAVEL_FLY_COLOR, CANVAS_TRAVEL_TELEPORT_COLOR } from '../Data/ConfigConstants';

const InfoPanel = ({ show }) => {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();

  today = `${yyyy}-${mm}-${dd}`

  if (show) {
    return (
      <Jumbotron className='overlay-2 info-panel'>
        <h1 className='jumbotron-title'>Information</h1>
        <p className='jumbotron-text'>
          This is a small project to create a route guide for World of Warcraft. It takes teleports into account and calculates the fastest way to get from one place on Azeroth to the other.
        </p>
        <p className='jumbotron-text'>
          To plan a route, you can either search for locations from the search boxes on the left, or click the start and end points on the map. You can then select a route from a few relatively good possibilities.
        </p>
        <p className='jumbotron-text'>
          As of right now, default settings are hard-coded and have to be changed manually each time you load the site. Perhaps some day I'll create cookies for this site.
        </p>
        <h4>Map legend</h4>
          <ul>
            <li>{`Start position = ${CANVAS_START_COLOR} dot`}</li>
            <li>{`Destination = ${CANVAS_END_COLOR} dot`}</li>
            <li>{`Available teleport = ${CANVAS_TELEPORT_COLOR} dot`}</li>
            <li>{`Used teleport = ${CANVAS_ACTIVE_TELEPORT_COLOR} dot`}</li>
            <li>{`Travel by teleport = ${CANVAS_TRAVEL_TELEPORT_COLOR} line`}</li>
            <li>{`Travel by flying = ${CANVAS_TRAVEL_FLY_COLOR} line`}</li>
          </ul>
        <h6>Features to-do</h6>
          <ul>
            <li>Add tooltips for map elements.</li>
            <li>Add possibility to change Hearthstone location.</li>
            <li>Add cookies to save user settings.</li>
          </ul>
        <h6>Known issues</h6>
          <ul>
            <li>Some areas (especially in Shadowlands) cause the route algorithm and the site to freeze.</li>
            <li>The route algorithm sometimes prioritises worse routes.</li>
          </ul>
          <p className='muted'>Last edited on {today}.</p>
      </Jumbotron>
    )
  } else {
    return null
  }
}

export default InfoPanel