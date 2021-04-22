import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Page = ({ title, children }) => (
  <div className="">
    <Container>
      <Card className="containerSch">
        <Card.Header as="h5">
          <Card.Title className="titlePage">{title}</Card.Title>
        </Card.Header>
        <Card.Body>
          {children}
        </Card.Body>
      </Card>
    </Container>
  </div>

);

export default Page;
