import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainNav from './main_nav';

const Contact = (props) => {

  return (
    <div>
    <MainNav/>
    <Container>
            <Row>
              <Col>Contact Us</Col>
            </Row>
          </Container>
    </div>
  );

}

export default Contact;
