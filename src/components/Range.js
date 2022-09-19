import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const Range = (props) => {
  const { response, setResponse } = props;
  return (
    <Form.Group className="form-rangeSelect">
      <Form.Range
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <p>{response}</p>
    </Form.Group>
  );
};

Range.propTypes = {
  response: PropTypes.any,
  setResponse: PropTypes.func.isRequired,
};

export default Range;
