import { Form, Row } from 'react-bootstrap'
import PredictiveSearchField from './PredictiveSearchField'

import namedLocations from '../Data/LocationDB'

const PointSearch = ( props ) => {
  const options = namedLocations.map(loc => loc.name)
  
  //<PredictiveSearchField options={options} placeholder={'Enter end location...'} onChange={props.setCurrentEnd} value={props.customEndValue}/>    
  return (
    <Form>
      <Form.Group controlId="startEndSelect">
        <Form.Label as={Row}>Route start and end points</Form.Label>
        <PredictiveSearchField options={namedLocations} placeholder={'Enter start location...'} onChange={props.setCurrentStart} value={props.customStartValue} propChanged={props.startPropChanged} resetPropChange={props.resetPropChange}/> 
        <PredictiveSearchField options={namedLocations} placeholder={'Enter end location...'} onChange={props.setCurrentEnd} value={props.customEndValue} propChanged={props.endPropChanged} resetPropChange={props.resetPropChange}/>   
      </Form.Group>
    </Form>
  )
}

export default PointSearch