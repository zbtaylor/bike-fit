import React from "react";
import { Row, Col, Result, Button } from "antd";

const ErrorMissing = () => {
  return (
    <Result
      status="error"
      title="404"
      subTitle="The requested page does not exist."
      extra={
        <Button type="primary" href="/">
          Back Home
        </Button>
      }
    />
  );
};

export default ErrorMissing;
