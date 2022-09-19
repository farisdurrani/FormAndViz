import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { toast } from "react-toastify";
import Button from "react-bootstrap/Button";
import { EMAIL_REGEX } from "../constants";
import {
  signInWithEmail,
  registerWithEmail,
} from "../firebase";

const Login = () => {
  const [isNewRegister, setIsNewRegister] = useState(false);
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

  const handleSubmit = async () => {
    if (!emailValidated || !passwordValidated) {
      toast.error("Please fix your inputs");
      return;
    }

    if (isNewRegister) {
      const user = await registerWithEmail(email, password);
      if (user) {
        toast.success(`Registration of ${user.email} successful`);
        window.location.replace("/results");
      }
    } else {
      const user = await signInWithEmail(email, password);
      if (user) {
        toast.success(`Login with ${user.email} successful`);
        window.location.replace("/results");
      }
    }
  };

  return (
    <Container
      id="login"
      className="d-flex justify-content-center align-items-center"
    >
      <div className="login-container p-5">
        <h1 className="mb-2">
          Admin {isNewRegister ? "Registration" : "Login"}
        </h1>
        <Form>
          {isNewRegister ? (
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                onBlur={handleOnBlurEmail}
              />
            </Form.Group>
          ) : null}
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
          <Button variant="primary" className="mb-2" onClick={handleSubmit}>
            {isNewRegister ? "Register" : "Login"}
          </Button>
          <br />
          <a
            className="signup"
            href="#"
            onClick={() => setIsNewRegister((e) => !e)}
          >
            {isNewRegister ? "Login" : "Register"}
          </a>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
