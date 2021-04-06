import React from 'react'
import NavigationSteps from './NavigationSteps'
import Canvas from './Canvas/Canvas'

import { Container, Row, Col} from 'react-bootstrap'

const Header = (props) => {
  return (
    <Container>
      <Row>
        <Col><NavigationSteps nodes={props.nodes} finalRoute={props.finalRoute} /></Col>
        <Col><Canvas onClick={props.onClick} onClickEditChange={props.onClickEditChange} teleports={props.teleports} nodes={props.nodes} finalRoute={props.finalRoute} continent={props.continent} changeBackground={props.changeBackground}/></Col>
      </Row>
    </Container>
  )
}

export default Header