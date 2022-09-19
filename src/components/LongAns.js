import React from "react";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

const LongAns = (props) => {
  const { setResponse } = props;
  return (
    <Form.Group className="form-longAns mb-3">
      <Form.Control
        as="textarea"
        rows={3}
        onBlur={(e) => setResponse(e.target.value)}
      />
    </Form.Group>
  );
};

LongAns.propTypes = {
  setResponse: PropTypes.func.isRequired,
};

export default LongAns;
