import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

export default function MyProfile() {
  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const myRockets = reservedRockets.map((rocket) => (
    <ListGroup.Item key={rocket.id}>
      {rocket.rocket_name}
    </ListGroup.Item>
  ));

  const myMissions = [];

  return (
    <Container className="container-xl">
      <Row className="mt-4">
        <Col>
          <h2>My Missions</h2>
          <ListGroup>
            {myMissions}
          </ListGroup>
        </Col>

        <Col>
          <h2>My Rockets</h2>
          <ListGroup>
            {myRockets}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
