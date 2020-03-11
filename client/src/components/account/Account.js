import React from "react";
import { PageHeader, Result, Button, Row, Col } from "antd";

const Account = () => {
  return (
    <>
      <PageHeader title="Account" />

      <Result
        title="Coming Soon"
        subTitle="We're still working on this page."
        extra={
          <Button type="primary" href="/">
            Back Home
          </Button>
        }
      />
    </>
  );
};

export default Account;
