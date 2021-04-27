import { Form, Row } from 'react-bootstrap'

const ClickSelector = ({ updateClickEditTarget }) => {
  
  return (
    <Form>
      <Form.Group controlId="startEndSelect">
        <Form.Label as={Row}>Your clicks edit</Form.Label>
        <Form.Check inline defaultChecked={true} type='radio' label='Start point' id='start-point' name='startEndSelect' onChange={updateClickEditTarget}></Form.Check>
        <Form.Check inline type='radio' label='End point' id='end-point' name='startEndSelect' onChange={updateClickEditTarget}></Form.Check>
      </Form.Group>
    </Form>
  )
}

export default ClickSelector