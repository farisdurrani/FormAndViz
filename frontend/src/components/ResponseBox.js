import React, { useState, useEffect, useId } from "react";
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
  Spacer,
} from "./index";

const ResponseBox = (props) => {
  const {
    question,
    type,
    description,
    entries = [],
    response,
    setResponse,
  } = props;

  const queryMap = {
    radio: <Radio entries={entries} setResponse={setResponse} />,
    checkbox: (
      <Checkbox
        entries={entries}
        response={response}
        setResponse={setResponse}
      />
    ),
    shortAns: <ShortAns setResponse={setResponse} />,
    longAns: <LongAns setResponse={setResponse} />,
    emailInput: <EmailInput setResponse={setResponse} />,
    range: <Range entries={entries} setResponse={setResponse} />,
    select: <Select entries={entries} setResponse={setResponse} />,
  };

  return (
    <div className="response-box p-4 mt-4">
      <p className="question-title mb-0">{question}</p>
      <p className="question-description">{description}</p>
      <Spacer className="mt-3" />
      {queryMap[type]}
    </div>
  );
};

ResponseBox.propTypes = {};

export default ResponseBox;
