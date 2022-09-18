import React, { useState } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Form from "react-bootstrap/Form";
import {
  Radio,
  Checkbox,
  ShortAns,
  LongAns,
  EmailInput,
  Range,
  Select,
} from "./index";

const ResponseBox = (props) => {
  return (
    <div className="response-box">
      <p className="question-title">Can you attend?</p>
      <Form>
        <Checkbox />
      </Form>
    </div>
  );
};

ResponseBox.propTypes = {};

export default ResponseBox;
