import React, { useState } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Form from "react-bootstrap/Form";

const Checkbox = (props) => {
  return (
    <Form.Group>
      {["Yes", "No"].map((e) => (
        <Form.Check
          key={e}
          type="checkbox"
          name="group1"
          id={e}
          label={e}
          onChange={(e) => console.log(e.target)}
        />
      ))}
    </Form.Group>
  );
};

Checkbox.propTypes = {};

export default Checkbox;
