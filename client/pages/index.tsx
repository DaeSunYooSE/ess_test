import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Link from "next/link";
import editing from "@assets/img/icons/spot-illustrations/21.png"; //"@asset/img/icons/spot-illustrations/21.png";

const Starter = () => {
  return (
    <Card>
      <Card.Body className="overflow-hidden p-lg-6">
        <Row className="align-items-center justify-content-between">
          <Col lg={6}>
            <img src={editing} className="img-fluid" alt="" />
          </Col>
          <Col lg={6} className="ps-lg-4 my-5 text-center text-lg-start">
            <h3 className="text-primary">Edit me!</h3>
            <p className="lead">Create Something Beautiful.</p>
            <Link href="/documentation/getting-started">
              <Button variant="falcon-primary">Getting started</Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Starter;
