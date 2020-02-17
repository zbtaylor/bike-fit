import React, { useState, useEffect } from "react";
import { Row, Col, Button, Spin, Result } from "antd";
import Axios from "axios";

const AuthConfirmation = props => {
  const [confirmed, setConfirmed] = useState(false);
  useEffect(() => {
    const body = {
      hash: props.match.params.hash
    };
    Axios.post("/api/auth/confirm/", body)
      .then(res => {
        if (res.status === 200) {
          setConfirmed(true);
        }
      })
      .catch(err => {
        // handle error
        console.log(err.message);
      });
  }, []);
  return (
    <Row
      type="flex"
      justify="center"
      align="middle"
      className="full-height center-text"
    >
      <Col span={12}>
        {!confirmed ? (
          <Result
            icon={<Spin size="large" />}
            title="Confirming..."
            subTitle="Please wait while we confirm your email address."
          />
        ) : (
          <Result
            status="success"
            title="Success!"
            subTitle="Your email address has been confirmed! You may now log in."
            extra={
              <Button type="primary" href="/login">
                Log In
              </Button>
            }
          />
        )}
      </Col>
    </Row>
  );
};

export default AuthConfirmation;
