import React from "react";
import { Row, Col, Result, Button } from "antd";

const ErrorMissing = () => {
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      className="full-height center-text"
    >
      <Col span={18}>
        <Result
          status="404"
          title="404"
          subTitle="The requested page does not exist."
          extra={
            <Button type="primary" href="/">
              Back Home
            </Button>
          }
        />
      </Col>
    </Row>
  );
};

export default ErrorMissing;
