import { Form, Row } from 'react-bootstrap'
import PredictiveSearchField from './PredictiveSearchField'

import namedLocations from '../Data/LocationDB'

const PointSearch = ( props ) => {
  return (
    <Form className='light-bottom-border wide'>
      <Form.Group controlId="startEndSelect">
        <Form.Label as={Row} className='bold'>Route start and end points</Form.Label>
        <PredictiveSearchField options={namedLocations} placeholder={'Enter start location...'} onChange={props.setCurrentStart} value={props.customStartValue} propChanged={props.startPropChanged} resetPropChange={props.resetPropChange}/> 
        <PredictiveSearchField options={namedLocations} placeholder={'Enter end location...'} onChange={props.setCurrentEnd} value={props.customEndValue} propChanged={props.endPropChanged} resetPropChange={props.resetPropChange}/>   
      </Form.Group>
    </Form>
  )
}

export default PointSearch