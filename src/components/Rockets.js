import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const rocketList = rockets.map((rocket) => (
    <Row key={rocket.id} className="my-4">
      <Col sm={3}>
        <Image src={rocket.flickr_images[0]} alt={rocket.rocket_name} fluid />
      </Col>
      <Col>
        <h2 className="h4">{rocket.rocket_name}</h2>
        <p>{rocket.description}</p>
        <Button variant="primary">Reserve Rocket</Button>
      </Col>
    </Row>
  ));

  return (
    <Container class="container-xl">
      {rocketList}
    </Container>
  );
}
