import React, { useState, useEffect } from "react";
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
  const { question } = props;
  const [response, setResponse] = useState();
  const [response2, setResponse2] = useState();

  // console.log(response);

  return (
    <div className="response-box p-3 mt-4">
      <p className="question-title">{question}</p>
      <Checkbox response={response} setResponse={setResponse} />
      <Radio setResponse={setResponse2} />
    </div>
  );
};

ResponseBox.propTypes = {};

export default ResponseBox;
