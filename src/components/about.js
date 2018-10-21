import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainNav from './main_nav';

const About = (props) => {

  return (
    <div>
    <MainNav/>
    <Container>
            <Row>
              <Col>Who we are...</Col>
            </Row>
          </Container>
    </div>

  );
}

export default About;
