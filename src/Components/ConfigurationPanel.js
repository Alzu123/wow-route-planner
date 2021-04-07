import React from 'react'
import { Form, Jumbotron, Col, Button, Row } from 'react-bootstrap'
import ToggleRestrictions from './ToggleRestriction'

const ConfigurationPanel = ({ show, teleports, onClick }) => {
  if (show) {
    return (
      <Jumbotron className='overlay'>
        <Form.Group>
          <Form.Group>
            <Form.Group id='Class'>
              <Form.Label column lg={2} className='form-title'>
                Toggleable filters
              </Form.Label>
              <Form.Text column lg={2} muted>
                Green = all active, yellow = some active, red = none active, grey = none available.
              </Form.Text>
              <Form.Row>
                <Form.Label column lg={2}>
                  Class
                </Form.Label>
                <ToggleRestrictions teleports={teleports} type='Class' value='Death Knight' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Class' value='Demon Hunter' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Class' value='Druid' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Class' value='Hunter' onClick={onClick}/>
              </Form.Row>
              <Form.Row>
                <Form.Label column lg={2}>
                </Form.Label>
                <ToggleRestrictions teleports={teleports} type='Class' value='Mage' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Class' value='Monk' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Class' value='Paladin' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Class' value='Priest' onClick={onClick}/>
              </Form.Row>
              <Form.Row>
                <Form.Label column lg={2}>
                </Form.Label>
                <ToggleRestrictions teleports={teleports} type='Class' value='Rogue' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Class' value='Shaman' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Class' value='Warlock' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Class' value='Warrior' onClick={onClick}/>
              </Form.Row>
            </Form.Group>
            <Form.Group id='Race'>
              <Form.Row>
                <Form.Label column lg={2}>
                  Race
                </Form.Label>
                <ToggleRestrictions teleports={teleports} type='Race' value='Dark Iron Dwarf' onClick={onClick}/>
              </Form.Row>
            </Form.Group>
            <Form.Group id='Faction'>
              <Form.Row>
                <Form.Label column lg={2}>
                  Faction
                </Form.Label>
                <ToggleRestrictions teleports={teleports} type='Faction' value='Alliance' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Faction' value='Horde' onClick={onClick}/>
                <Col></Col>
                <Col></Col>
              </Form.Row>
            </Form.Group>
            <Form.Group id='Profession'>
              <Form.Row>
                <Form.Label column lg={2}>
                  Profession
                </Form.Label>
                <ToggleRestrictions teleports={teleports} type='Profession' value='Engineering' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Profession' value='Goblin Engineering' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Profession' value='Gnomish Engineering' onClick={onClick}/>
                <Col></Col>
              </Form.Row>
            </Form.Group>
            <Form.Group id='Covenant'>
              <Form.Row>
                <Form.Label column lg={2}>
                Covenant
                </Form.Label>
                <ToggleRestrictions teleports={teleports} type='Covenant' value='Kyrian' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Covenant' value='Necrolord' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Covenant' value='Night Fae' onClick={onClick}/>
                <ToggleRestrictions teleports={teleports} type='Covenant' value='Venthyr' onClick={onClick}/>
              </Form.Row>
            </Form.Group>
          </Form.Group>

          <Form.Group>
            <Form.Label column lg={2} className='form-title'>
              Calculation Settings
            </Form.Label>
            <Form.Row>
              <Form.Label column lg={2}>
                Loading Screen Duration
              </Form.Label>
              <Col>
                <Form.Control type='number' placeholder='Enter as seconds on average' />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column lg={2}>
                Loading Screen Penalty
              </Form.Label>
              <Col>
                <Form.Control type='number' placeholder='Enter as "seconds". This represents how "annoying" loading screens are.' />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label column lg={2} className='form-title'>
            Route preference
            </Form.Label>
            <Form.Control as="select">
              <option>Fewest loading screens</option>
              <option>Fastest route</option>
              <option>Least flying</option>
              <option>Most scenic</option>
            </Form.Control>
          </Form.Group>
          <br />
        </Form.Group>

        <Form.Group as={Row}>
          <Col>
            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Jumbotron>
    )
  } else {
    return null
  }
}

export default ConfigurationPanel