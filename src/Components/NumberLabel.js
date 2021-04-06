import React from 'react'
import { Form } from 'react-bootstrap'

const Position = ({ onClick, numRoutes }) => {
  return (
    <Form>
      <Form.Group controlId="routeOrdinal">
        <Form.Label>Enter how good of a route you wish to see. 0 is the best.</Form.Label>
        <Form.Control type="number" id="routeOrdinal" name="quantity" min="0" max={numRoutes} onChange={onClick}/>
      </Form.Group>
    </Form>
  )
}

export default Position