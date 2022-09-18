import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const EmailInput = (props) => {
  return (
    <Form>
      <Form.Group className="form-email mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
    </Form>
  );
};

EmailInput.propTypes = {};

export default EmailInput;
