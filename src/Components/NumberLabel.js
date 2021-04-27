import React from 'react'
import { Row, Form, Col } from 'react-bootstrap'

const Position = ({ value, onClick, numRoutes }) => {

  return (
    <Form className='route-selection light-bottom-border'>
      <Form.Label className='bold'>Route selection</Form.Label>
      <Form.Group as={Row} controlId="routeOrdinal">
        <Col xs={2}>Best</Col>
        <Col className='no-side-padding range-control'><Form.Control type="range" value={value} name="quantity" min={1} max={numRoutes} onChange={onClick} tooltip='off'/></Col>
        <Col className='align-right' xs={2}>Worst</Col>
      </Form.Group>
    </Form>
  )
}

export default Position