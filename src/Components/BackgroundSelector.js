import { Form } from 'react-bootstrap'
import continents from '../Data/ContinentDB'

const ClickSelector = ({ continent, changeBackground }) => {
  // Transform continents from object to array to loop over it. Also grab the key to set default value
  let continentArray = []
  let currentContinentKey
  for (const iContinent in continents) {
    continentArray.push({...continents[iContinent], key: iContinent})
    if (continents[iContinent].id === continent.id) {
      currentContinentKey = iContinent
    }
  }
  
  return (
    <Form>
      <Form.Group controlId="continentSelect">
        <Form.Label>Select continent</Form.Label>
        <Form.Control as="select" value={currentContinentKey} onChange={changeBackground}>
          {continentArray.map((continent, i) => <option value={continent.key} key={i}>{continent.name}</option>)}
        </Form.Control>
      </Form.Group>
    </Form>
  )
}

export default ClickSelector