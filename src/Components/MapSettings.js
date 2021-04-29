import React from 'react'
import ClickSelector from './ClickSelector'
import BackgroundSelector from './BackgroundSelector'
import { Accordion, Card } from 'react-bootstrap'
import ContextAwareToggle from './ContextAwareToggle'


const MapSettings = ({ updateClickEditTarget, continent, changeBackground }) => {
  return (
    <Accordion defaultActiveKey="0">
      <Card className='overlay-1 settings-card'>
        <ContextAwareToggle eventKey='0' headerText={'Map settings'}>Map Settings</ContextAwareToggle>
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