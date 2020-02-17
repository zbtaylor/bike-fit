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
      <Col span={6}>
        <h1>My Bike Fit Journal</h1>
        <Button type="primary" href="/signup">
          Sign Up
        </Button>
        <Divider type="vertical">or</Divider>
        <Button type="secondary" href="/login">
          Log In
        </Button>
      </Col>
    </Row>
  );
};

export default MarketingIndex;
