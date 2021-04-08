import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Page = ({ title, children }) => (
  <Container>
    <Card>
      <Card.Header as="h5">
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Header>
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  </Container>

);

export default Page;
