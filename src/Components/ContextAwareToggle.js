const { useContext } = require('react');
const { Accordion, AccordionContext, Container, Row, Col, Card } = require('react-bootstrap');

const ContextAwareToggle = ({ eventKey, headerText }) => {
  const caretOpen = require('../Data/Images/Icons/Caret_Open.png').default
  const caretClose = require('../Data/Images/Icons/Caret_Close.png').default
  const currentEventKey = useContext(AccordionContext);
  const isCurrentEventKey = currentEventKey === eventKey;

  let caret;
  if (isCurrentEventKey) {
    caret = caretClose
  } else {
    caret = caretOpen
  }

  return (
    <Accordion.Toggle as={Card.Header} eventKey='0'>
      <Container className='no-side-padding'>
        <Row>
          <Col xs={10}>{headerText}</Col>
          <Col xs={1}>
            <img
              alt='Accordion signifier'
              src={caret}
              width='15px'
              height='15px'
              className='d-inline-block align-right'
            />
          </Col>
        </Row>
      </Container>
    </Accordion.Toggle>
  );
}

export default ContextAwareToggle