import React from 'react'

import ClickSelector from './ClickSelector'
import BackgroundSelector from './BackgroundSelector'
import { Accordion, Card } from 'react-bootstrap'

const MapSettings = ({ updateClickEditTarget, continent, changeBackground }) => {

  return (
    <Accordion>
      <Card className='overlay-1 settings-card'>
        <Accordion.Toggle as={Card.Header} eventKey='0'>
          Map Settings
        </Accordion.Toggle>
        <Accordion.Collapse eventKey='0'>
          <Card.Body>
            <ClickSelector updateClickEditTarget={updateClickEditTarget} />
            <BackgroundSelector continent={continent} changeBackground={changeBackground}/>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  )
}

export default MapSettings