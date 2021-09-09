import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

import store from '../redux/configureStore';
import { reserveMission, cancelMissionReservation } from '../redux/missions/missions';

export default function Missions() {
  const missions = useSelector((state) => state.missions);

  const handleClick = (mission) => (e) => {
    if (e.target.textContent === 'Join Mission') {
      store.dispatch(reserveMission(mission));
    } else if (e.target.textContent === 'Leave Mission') {
      store.dispatch(cancelMissionReservation(mission));
    }
  };

  const missionList = missions.map((mission) => (
    <tr key={mission.id}>
      <th className="align-middle">{mission.mission_name}</th>
      <td>{mission.description}</td>
      <td className="align-middle">
        {!mission.reserved && (
          <Badge bg="secondary" className="me-2">Not a member</Badge>
        )}

        {mission.reserved && (
          <Badge bg="success" className="me-2">Active Member</Badge>
        )}
      </td>
      <td className="align-middle">
        {!mission.reserved && (
          <Button
            className="text-nowrap"
            variant="outline-secondary"
            onClick={handleClick(mission)}
          >
            Join Mission
          </Button>
        )}

        {mission.reserved && (
          <Button
            className="text-nowrap"
            variant="outline-danger"
            onClick={handleClick(mission)}
          >
            Leave Mission
          </Button>
        )}
      </td>
    </tr>
  ));

  return (
    <Container className="container-xl">
      <Row>
        <Col>
          <Table striped bordered hover className="mt-4">
            <thead>
              <tr>
                <th>Mission</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{missionList}</tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
