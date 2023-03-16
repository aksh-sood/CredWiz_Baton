import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const ProductFeatures = ({ title, description, imageUrl }) => {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2>{title}</h2>
          <p>{description}</p>
        </Col>
        <Col md={6}>
          <Image src={imageUrl} fluid rounded />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductFeatures;