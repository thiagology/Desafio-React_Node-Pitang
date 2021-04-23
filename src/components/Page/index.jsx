import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Page = ({ title, children }) => (
  <Container>
    <div className="header" id="myHeader">
      <h2>
        Agendamento Vacina Covid-19
        <img className="header__image" src="/pitangIcon.png" alt="Pitang" />
      </h2>
    </div>
    <Card className="containerSch">
      <Card.Header as="h5">
        <Card.Title className="titlePage">{title}</Card.Title>
      </Card.Header>
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  </Container>

);

export default Page;
