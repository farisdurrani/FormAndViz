import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const ShortAns = (props) => {
  return (
    <Form.Group className="mb-3">
      <Form.Control type="text" placeholder="Short answer here" />
    </Form.Group>
  );
};

ShortAns.propTypes = {};

export default ShortAns;
