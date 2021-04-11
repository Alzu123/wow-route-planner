import React, { useState } from 'react'
import { Row, Form, Col } from 'react-bootstrap'
import RangeSlider from 'react-bootstrap-range-slider';

const Position = ({ value, onClick, numRoutes }) => {
  const [ tempValue, setTempValue ] = useState(value)

  function onDrag(event) {
    setTempValue(event.target.value)
  }

  function onWrite(event) {
    onDrag(event)
    onClick(event)
  }

  return (
    <Form className='route-selection'>
      <Form.Label>Enter how good of a route you wish to see. 1 is the best.</Form.Label>
      <Form.Group as={Row} controlId="routeOrdinal">
        <Col xs={9}><RangeSlider value={tempValue} name="quantity" min={1} max={numRoutes} onChange={onDrag} onAfterChange={onClick} tooltip='off'/></Col>
        <Col><Form.Control value={tempValue} onChange={onWrite}/></Col>
      </Form.Group>
    </Form>
  )
}

export default Position