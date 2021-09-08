import React from 'react';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export default function Missions() {
  // get missions data from the store
  const missions = useSelector((state) => state.missions);

  const missionList = missions.map((mission) => (
    <tr key={mission.id}>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        <Badge bg="success" className="me-2">
          Active Member
        </Badge>
      </td>
      <td>
        <Button variant="outline-secondary">Join Mission</Button>
      </td>
    </tr>
  ));

  return (
    <Container className="container-xl">
      <Row>
        <Col>
          <Table striped bordered hover>
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
