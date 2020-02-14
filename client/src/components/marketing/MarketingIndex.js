import React from "react";
import { Row, Col, Button, Divider } from "antd";

const MarketingIndex = () => {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      className="full-height center-text"
    >
      <Col span={8}>
        <h1>My Bike Fit Journal</h1>
        <Button type="primary" block href="/register">
          Register
        </Button>
        <Divider>or</Divider>
        <Button type="primary" block href="/login">
          Log In
        </Button>
      </Col>
    </Row>
  );
};

export default MarketingIndex;
