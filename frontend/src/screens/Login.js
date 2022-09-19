import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { EMAIL_REGEX } from "../constants";

const Login = (props) => {
  const [email, setEmail] = useState();
  const [emailValidated, setEmailValidated] = useState(true);
  const [password, setPassword] = useState();
  const [passwordValidated, setPasswordValidated] = useState(true);

  const handleOnBlurPwd = (e) => {
    const val = e.target.value;
    if (val.length < 6) setPasswordValidated(false);
    else setPasswordValidated(true);
    setPassword(val);
  };

  const handleOnBlurEmail = (e) => {
    const val = e.target.value;
    if (!val.match(EMAIL_REGEX)) setEmailValidated(false);
    else setEmailValidated(true);
    setEmail(val);
  };

  return (
    <Container
      id="login"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="login-container p-5">
        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className={emailValidated ? null : "invalid-entry"}
              type="email"
              placeholder="Enter email"
              onBlur={handleOnBlurEmail}
            />
            {emailValidated ? null : (
              <Form.Text className="validate-error-msg">
                Invalid email format
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className={passwordValidated ? null : "invalid-entry"}
              type="password"
              placeholder="Password"
              onBlur={handleOnBlurPwd}
            />
            {passwordValidated ? null : (
              <Form.Text className="validate-error-msg">
                Password must be at least 6 characters long
              </Form.Text>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

Login.propTypes = {};

export default Login;
