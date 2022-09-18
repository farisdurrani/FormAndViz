import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const LongAns = (props) => {
  const { setResponse } = props;
  return (
    <Form.Group className="form-longAns mb-3">
      <Form.Control as="textarea" rows={3} />
    </Form.Group>
  );
};

LongAns.propTypes = {};

export default LongAns;
