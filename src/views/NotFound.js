import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const NotFound = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Alert variant="danger" className="text-center">
            <Alert.Heading>404</Alert.Heading>
            <p>Page Not Found</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
