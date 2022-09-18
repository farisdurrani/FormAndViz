import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

const Select = (props) => {
  return (
    <Form.Group>
      <Form.Select aria-label="Selection">
        <option value="Choose One">Choose One</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </Form.Group>
  );
};

Select.propTypes = {};

export default Select;
