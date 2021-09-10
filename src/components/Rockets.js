import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import store from '../redux/configureStore';
import { reserveRocket, cancelRocketReservation } from '../redux/rockets/rockets';

export default function Rockets() {
  const rockets = useSelector((state) => state.rockets);

  const handleClick = (rocket) => (e) => {
    if (e.target.textContent === 'Reserve Rocket') {
      store.dispatch(reserveRocket(rocket));
    } else if (e.target.textContent === 'Cancel Reservation') {
      store.dispatch(cancelRocketReservation(rocket));
    }
  };

  const rocketList = rockets.map((rocket) => (
    <Row key={rocket.id} className="my-4">
      <Col sm={3}>
        <Image src={rocket.flickr_images[0]} alt={rocket.rocket_name} fluid />
      </Col>
      <Col>
        <h2 className="h4">{rocket.rocket_name}</h2>
        <p>
          {rocket.reserved && (
            <Badge bg="success" className="me-2">Reserved</Badge>
          )}
          {rocket.description}
        </p>

        {!rocket.reserved && (
          <Button
            className="text-nowrap"
            variant="primary"
            onClick={handleClick(rocket)}
          >
            Reserve Rocket
          </Button>
        )}

        {rocket.reserved && (
          <Button
            className="text-nowrap"
            variant="outline-secondary"
            onClick={handleClick(rocket)}
          >
            Cancel Reservation
          </Button>
        )}
      </Col>
    </Row>
  ));

  return (
    <Container className="container-xl">
      {rocketList}
    </Container>
  );
}
