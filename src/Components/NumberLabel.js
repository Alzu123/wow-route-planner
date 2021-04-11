import React from 'react'
import { Row, Form, Col } from 'react-bootstrap'

const Position = ({ value, onClick, numRoutes }) => {

  return (
    <Form className='route-selection'>
      <Form.Label>Enter how good of a route you wish to see. 0 is the best.</Form.Label>
      <Form.Group as={Row} controlId="routeOrdinal">
        <Col xs={9}><Form.Control type="range" value={value} name="quantity" min={1} max={numRoutes} onChange={onClick} tooltip='off'/></Col>
        <Col><Form.Control value={value} onChange={onClick}/></Col>
      </Form.Group>
    </Form>
  )
}

export default Position