import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'

const InfoPanel = ({ show }) => {
  if (show) {
    return (
      <Jumbotron className='overlay info-panel'>
        <h1 className='jumbotron-title'>Information</h1>
        <p className='jumbotron-text'>
          This is a small project to create a route guide for World of Warcraft. It takes teleports into account and calculates the fastest way to get from one place on Azeroth to the other.
        </p>
        <p>
          As of right now, default settings are hard-coded and have to be changed manually each time you load the site. Perhaps some day I'll create cookies for this site. There are also some minor bugs, the route algorithm could use some work and the visual side needs a face-lift. But it has to be done at some point!
        </p>
        <p>
          Features to-do:
          <ul>
            <li>Add tooltips for map elements.</li>
            <li>Add possibility to change Hearthstone location.</li>
            <li>Add cookies to save user settings.</li>
            <li>Finalize the look of the page.</li>
          </ul>
        </p>
        <p>
          Known issues:
          <ul>
            <li>Some areas (especially in Shadowlands) cause the route algorithm and the site to freeze.</li>
            <li>The route algorithm sometimes prioritises worse routes.</li>
            <li>Header panels block header on small screens.</li>
            <li>Clicking the page title does not reset the header tab selection.</li>
            <li>The map can be still seen when the window is very narrow.</li>
          </ul>
        </p>
      </Jumbotron>
    )
  } else {
    return null
  }
}

export default InfoPanel