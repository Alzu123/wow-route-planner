import React, { useContext } from 'react'

import ClickSelector from './ClickSelector'
import BackgroundSelector from './BackgroundSelector'
import { Accordion, AccordionContext, Card, Col, Container, Row } from 'react-bootstrap'

function ContextAwareToggle({ _, eventKey }) {
  const caretOpen = require('../Data/Images/Icons/Caret_Open.png').default
  const caretClose = require('../Data/Images/Icons/Caret_Close.png').default
  const currentEventKey = useContext(AccordionContext);
  const isCurrentEventKey = currentEventKey === eventKey;

  let caret;
  if (isCurrentEventKey) {
    caret = caretClose
  } else {
    caret = caretOpen
  }

  return (
    <Accordion.Toggle as={Card.Header} eventKey='0'>
      <Container className='no-side-padding'>
        <Row>
          <Col xs={10}>Map Settings</Col>
          <Col xs={1}>
            <img
              alt='Accordion signifier'
              src={caret}
              width='15px'
              height='15px'
              className='d-inline-block align-right'
            />
          </Col>
        </Row>
      </Container>
    </Accordion.Toggle>
  );
}

const MapSettings = ({ updateClickEditTarget, continent, changeBackground }) => {
  return (
    <Accordion>
      <Card className='overlay-1 settings-card'>
        <ContextAwareToggle eventKey='0'>Map Settings</ContextAwareToggle>
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