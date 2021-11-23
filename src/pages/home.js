import React, { useState } from "react";
import LoginForm from "../forms/Login";
import SignUpForm from "../forms/SignUp";

import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Container>
        <h1>HOME</h1>
        <Row>
          <Col>
            <LoginForm />
          </Col>
          <Col>
            <SignUpForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
