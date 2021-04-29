import React from 'react'
import { Form, Jumbotron, Col, Button, Row } from 'react-bootstrap'
import { LOADING_SCREEN_PENALTY, TIME_IN_LOADING_SCREENS } from '../Data/ConfigConstants'
import ToggleRestrictions from './ToggleRestriction'

const ConfigurationPanel = ({ show, teleports, onClick, updateConfiguration, defaultPreference }) => {
  if (show) {
    return (
      <Jumbotron className='overlay-2'>
        <h1 className='jumbotron-title'>Configuration settings</h1>
        <p className='jumbotron-subtitle muted'></p>
        <form onSubmit={updateConfiguration}>
          <Form.Group>
            <Form.Group>
              <Form.Label className='section-title'>
                Toggleable filters
              </Form.Label>
              <Form.Text muted>
                Green = all active, yellow = some active, red = none active, grey = none available.
              </Form.Text>
              <Form.Group className='subsection light-bottom-border' id='Class'>
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
              <Form.Group className='subsection light-bottom-border' id='Race'>
                <Form.Row>
                  <Form.Label column lg={2}>
                    Race
                  </Form.Label>
                  <ToggleRestrictions teleports={teleports} type='Race' value='Dark Iron Dwarf' onClick={onClick}/>
                </Form.Row>
              </Form.Group>
              <Form.Group className='subsection light-bottom-border' id='Faction'>
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
              <Form.Group className='subsection light-bottom-border' id='Profession'>
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
              <Form.Group className='subsection light-bottom-border' id='Covenant'>
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
              <Form.Label className='section-title'>
                Route preference
              </Form.Label>
              <Form.Text muted>
                {`Loading screens incur a ${TIME_IN_LOADING_SCREENS} second wait plus an 'annoyance penalty' which is evaluated at ${LOADING_SCREEN_PENALTY} second-equivalents.`}
              </Form.Text>
              <Form.Control id='route-preference' defaultValue={defaultPreference} as="select">
                <option value='preference'>Fastest route</option>
                <option value='totalLoadingScreens'>Fewest loading screens</option>
                <option value='totalFlyDistance'>Least flying</option>
                <option value='sceneryValue'>Most scenic</option>
              </Form.Control>
            </Form.Group>
            <br />
          </Form.Group>

          <Form.Group as={Row}>
            <Col>
              <Button type="submit">Apply preference</Button>
            </Col>
          </Form.Group>
        </form>
      </Jumbotron>
    )
  } else {
    return null
  }
}

export default ConfigurationPanel