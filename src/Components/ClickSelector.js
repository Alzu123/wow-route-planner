import { Form } from 'react-bootstrap'

const ClickSelector = ({ updateClickEditTarget }) => {
  
  return (
    <Form>
      <Form.Group controlId="startEndSelect">
        <Form.Label>Select which point you wish to edit</Form.Label>
        <Form.Control as="select" onChange={updateClickEditTarget}>
          <option value="start">Start point</option>
          <option value="end">End point</option>
        </Form.Control>
      </Form.Group>
    </Form>
  )

/*   return (
    <div>
      Clicks currently edit :
        <select id="select" onChange={updateClickEditTarget}>
          <option value="start">Start point</option>
          <option value="end">End point</option>
        </select>
    </div>
  ) */
}

export default ClickSelector