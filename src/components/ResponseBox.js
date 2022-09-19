import React, { useState, useEffect, useId } from "react";
import {
  Radio,
  Checkbox,
  ShortAns,
  LongAns,
  Range,
  Select,
  Spacer,
  NumberAns,
} from "./index";
import PropTypes from "prop-types";

const ResponseBox = (props) => {
  const {
    question,
    type,
    description,
    entries = [],
    response,
    setResponse,
    validateFunction,
    validateMsg,
    setValidated,
    validated,
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
    shortAns: (
      <ShortAns
        setResponse={setResponse}
        validateFunction={validateFunction}
        validateMsg={validateMsg}
        setValidated={setValidated}
        validated={validated}
      />
    ),
    longAns: <LongAns setResponse={setResponse} />,
    range: <Range response={response} setResponse={setResponse} />,
    select: <Select entries={entries} setResponse={setResponse} />,
    number: (
      <NumberAns
        setResponse={setResponse}
        validateFunction={validateFunction}
        validateMsg={validateMsg}
        setValidated={setValidated}
        validated={validated}
      />
    ),
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

ResponseBox.PropTypes = {
  setResponse: PropTypes.func.isRequired,
  exclude: PropTypes.object,
  validateFunction: PropTypes.func,
  validateMsg: PropTypes.string,
  validated: PropTypes.bool,
  setValidated: PropTypes.func,
  question: PropTypes.string.isRequired,
  type: PropTypes.type.isRequired,
  description: PropTypes.string,
  entries: PropTypes.arrayOf(PropTypes.string),
  response: PropTypes.oneOfType(
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ),
};

export default ResponseBox;
