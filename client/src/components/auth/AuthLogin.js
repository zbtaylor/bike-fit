import React, { useContext } from "react";
import { AccountContext } from "../../contexts/AccountContext";
import { Link } from "react-router-dom";
import { Form, Input, SubmitButton } from "formik-antd";
import { Typography, Layout, Row, Col, Divider, Button, message } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";
import Axios from "axios";

const { Paragraph } = Typography;

const AuthLogin = props => {
  const { setLoggedIn } = useContext(AccountContext);
  return (
    <Row type="flex" justify="center" align="middle" className="full-height">
      <Col span={6}>
        <Divider>Log In</Divider>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("This email address is invalid.")
              .required("Please provide an email address."),
            password: Yup.string().required("Please provide a password.")
          })}
          onSubmit={(values, { resetForm }) => {
            Axios.post("/api/auth/login", values)
              .then(res => {
                if (res.status === 200) {
                  props.history.push("/bikes");
                  setLoggedIn(true);
                }
              })
              .catch(err => {
                message.error(err.response.data.message, 4);
                resetForm();
              });
          }}
          render={() => (
            <Form layout="vertical">
              <Form.Item name="email">
                <Input name="email" placeholder="Email" />
              </Form.Item>
              <Form.Item name="password">
                <Input.Password name="password" placeholder="Password" />
              </Form.Item>
              <SubmitButton block>Log In</SubmitButton>
            </Form>
          )}
        />
        <Paragraph className="space-above-small">
          <Link to="/forgot">Forgot your password?</Link>
        </Paragraph>
      </Col>
    </Row>
  );
};

export default AuthLogin;
